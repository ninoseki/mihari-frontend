<template>
  <div>
    <div class="column">
      <h2 class="is-size-2 mb-4">Artifact</h2>

      <div class="columns">
        <div
          class="column"
          v-if="googleMapSrc !== undefined || urlscanLiveshotSrc !== undefined"
        >
          <div v-if="googleMapSrc">
            <h4 class="is-size-4">
              Geolocation
              <span class="has-text-grey">{{ countryCode }}</span>
            </h4>
            <iframe
              class="mb-4"
              :src="googleMapSrc"
              width="100%"
              height="240px"
            ></iframe>
          </div>

          <div v-if="urlscanLiveshotSrc">
            <h4 class="is-size-4">
              Live screenshot
              <span class="has-text-grey">Hover to expand</span>
            </h4>
            <img :src="urlscanLiveshotSrc" class="liveshot" alt="liveshot" />
          </div>
        </div>

        <div class="column">
          <h4 class="is-size-4">Information</h4>
          <div class="table-container">
            <table class="table is-bordered is-fullwidth">
              <tr>
                <th>ID</th>
                <td>
                  {{ artifact.id }}
                  <button
                    class="button is-light is-small is-pulled-right"
                    @click="deleteArtifact"
                  >
                    <span>Delete</span>
                    <span class="icon is-small">
                      <i class="fas fa-times"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr>
                <th>Data type</th>
                <td>{{ artifact.dataType }}</td>
              </tr>
              <tr>
                <th>Data</th>
                <td>{{ artifact.data }}</td>
              </tr>
            </table>
          </div>

          <div class="tags are-medium">
            <span class="tag is-info" v-for="tag in artifact.tags" :key="tag">{{
              tag
            }}</span>
          </div>
        </div>
      </div>

      <Links :data="artifact.data" :type="artifact.dataType"></Links>
    </div>

    <hr />

    <div class="column">
      <h2 class="is-size-2 mb-4">Related alerts</h2>

      <Loading v-if="getAlertsTask.isRunning"></Loading>

      <AlertsComponent
        :alerts="getAlertsTask.last.value"
        v-if="getAlertsTask.last?.value"
        @refresh-page="refreshPage"
        @update-page="updatePage"
        @update-tag="updateTag"
      >
      </AlertsComponent>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  nextTick,
  onMounted,
  PropType,
  ref,
  watch,
} from "vue";
import { useAsyncTask } from "vue-concurrency";
import { useRouter } from "vue-router";

import { API } from "@/api";
import AlertsComponent from "@/components/alert/Alerts.vue";
import Links from "@/components/link/Links.vue";
import Loading from "@/components/Loading.vue";
import { getCountryByCode } from "@/countries";
import { Alerts, ArtifactWithTags, IPInfo, SearchParams } from "@/types";

export default defineComponent({
  name: "Artifact",
  props: {
    artifact: {
      type: Object as PropType<ArtifactWithTags>,
      required: true,
    },
  },
  components: {
    AlertsComponent,
    Loading,
    Links,
  },
  setup(props) {
    const page = ref(1);
    const tag = ref<string | undefined>(undefined);
    const googleMapSrc = ref<string | undefined>(undefined);
    const countryCode = ref<string | undefined>(undefined);

    const router = useRouter();

    const urlscanLiveshotSrc = computed<string | undefined>(() => {
      if (props.artifact.dataType === "domain") {
        const url = `http://${props.artifact.data}`;
        return `https://urlscan.io/liveshot/?url=${url}`;
      }

      if (props.artifact.dataType === "url") {
        return `https://urlscan.io/liveshot/?url=${props.artifact.data}`;
      }

      return undefined;
    });

    const getGoogleMapSrc = (
      twoAlphaCountryCode: string
    ): string | undefined => {
      const country = getCountryByCode(twoAlphaCountryCode);

      if (country !== undefined) {
        return `https://maps.google.co.jp/maps?output=embed&q=${country.lat},${country.long}&z=3`;
      }

      return undefined;
    };

    const getIPInfoTask = useAsyncTask<IPInfo, [string]>(
      async (_signal, ipAddress: string) => {
        return await API.getIPInfo(ipAddress);
      }
    );

    const getAlertsTask = useAsyncTask<Alerts, []>(async () => {
      const params: SearchParams = {
        artifact: props.artifact.data,
        description: undefined,
        page: page.value,
        source: undefined,
        tag: tag.value,
        title: undefined,
        toAt: undefined,
        fromAt: undefined,
      };
      return await API.getAlerts(params);
    });

    const deleteArtifactTask = useAsyncTask<void, []>(async () => {
      return await API.deleteArtifact(props.artifact.id);
    });

    const deleteArtifact = async () => {
      const result = window.confirm(
        `Are you sure you want to delete ${props.artifact.data}?`
      );

      if (result) {
        await deleteArtifactTask.perform();
        router.push("/");
      }
    };

    const updatePage = (newPage: number) => {
      page.value = newPage;
    };

    const refreshPage = async () => {
      await getAlertsTask.perform();
    };

    const updateTag = (newTag: string | undefined) => {
      if (tag.value === newTag) {
        tag.value = undefined;
      } else {
        tag.value = newTag;
      }

      nextTick(async () => await getAlertsTask.perform());
    };

    onMounted(async () => {
      if (props.artifact.dataType === "ip") {
        const ipinfo = await getIPInfoTask.perform(props.artifact.data);
        countryCode.value = ipinfo.country;
        googleMapSrc.value = getGoogleMapSrc(ipinfo.country);
      }
      await getAlertsTask.perform();
    });

    watch(
      page,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      async (_current, _prev) => {
        nextTick(async () => await getAlertsTask.perform());
      }
    );

    return {
      countryCode,
      getAlertsTask,
      googleMapSrc,
      urlscanLiveshotSrc,
      deleteArtifact,
      refreshPage,
      updatePage,
      updateTag,
    };
  },
});
</script>

<style scopde>
img.liveshot {
  border: 1px solid #aaa;
  border-radius: 5px;
  width: 100%;
  max-height: 250px;
  object-fit: cover;
  object-position: top;
  display: block;
  overflow: hidden;
  transition: max-height 1s, height 1s;
}

img.liveshot:hover {
  max-height: none;
}
</style>
