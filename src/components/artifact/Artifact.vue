<template>
  <div>
    <div class="column">
      <h2 class="is-size-2 mb-4">Artifact</h2>
      <iframe
        :src="googleMapSrc"
        width="100%"
        height="240px"
        v-if="googleMapSrc"
      ></iframe>

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
import { Alerts, Artifact, IPInfo, SearchParams } from "@/types";

export default defineComponent({
  name: "Artifact",
  props: {
    artifact: {
      type: Object as PropType<Artifact>,
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

    const router = useRouter();

    const getGoogleMapSrc = (countryCode: string) => {
      const country = getCountryByCode(countryCode);

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
      googleMapSrc,
      getAlertsTask,
      updatePage,
      refreshPage,
      updateTag,
      deleteArtifact,
    };
  },
});
</script>
