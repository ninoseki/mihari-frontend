<template>
  <div>
    <div class="column">
      <h2 class="is-size-2 mb-4">Artifact</h2>

      <div class="columns">
        <div
          class="column is-half"
          v-if="googleMapSrc !== undefined || urlscanLiveshotSrc !== undefined"
        >
          <div v-if="googleMapSrc">
            <h4 class="is-size-4">
              Geolocation
              <span class="has-text-grey">{{
                countryCode || artifact.geolocation?.countryCode
              }}</span>
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
          <div class="block">
            <h4 class="is-size-4">Information</h4>
            <div class="table-container">
              <table class="table is-bordered is-fullwidth">
                <tr>
                  <th>ID</th>
                  <td>
                    {{ artifact.id }}
                    <span class="buttons is-pulled-right">
                      <button
                        class="button is-primary is-light is-small"
                        @click="enrichArtifact"
                      >
                        <span>Enrich</span>
                        <span class="icon is-small">
                          <i class="fas fa-lightbulb"></i>
                        </span>
                      </button>

                      <button
                        class="button is-light is-small"
                        @click="deleteArtifact"
                      >
                        <span>Delete</span>
                        <span class="icon is-small">
                          <i class="fas fa-times"></i>
                        </span>
                      </button>
                    </span>
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
          </div>

          <div class="block" v-if="artifact.tags.length > 0">
            <h4 class="is-size-4">Tags</h4>
            <Tags :tags="artifact.tags"></Tags>
          </div>

          <div class="block" v-if="artifact.autonomousSystem">
            <h4 class="is-size-4">AS</h4>
            <AS :autonomousSystem="artifact.autonomousSystem"></AS>
          </div>

          <div class="block" v-if="artifact.reverseDnsNames">
            <h4 class="is-size-4">Reverse DNS</h4>
            <ReverseDnsNames
              :reverseDnsNames="artifact.reverseDnsNames"
            ></ReverseDnsNames>
          </div>

          <div class="block" v-if="artifact.dnsRecords">
            <h4 class="is-size-4">DNS records</h4>
            <DnsRecords :dnsRecords="artifact.dnsRecords"></DnsRecords>
          </div>

          <div class="block" v-if="artifact.whoisRecord">
            <h4 class="is-size-4">Whois record</h4>
            <WhoisRecord :whoisRecord="artifact.whoisRecord"></WhoisRecord>
          </div>
        </div>
      </div>

      <div class="block">
        <Links :data="artifact.data" :type="artifact.dataType"></Links>
      </div>
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
import { useRouter } from "vue-router";

import {
  generateDeleteArtifactTask,
  generateEnrichArtifactTask,
  generateGetAlertsTask,
  generateGetIPTask,
} from "@/api-helper";
import AlertsComponent from "@/components/alert/Alerts.vue";
import AS from "@/components/artifact/AS.vue";
import DnsRecords from "@/components/artifact/DnsRecords.vue";
import ReverseDnsNames from "@/components/artifact/ReverseDnsNames.vue";
import Tags from "@/components/artifact/Tags.vue";
import WhoisRecord from "@/components/artifact/WhoisRecord.vue";
import Links from "@/components/link/Links.vue";
import Loading from "@/components/Loading.vue";
import { ArtifactWithTags, GCS, SearchParams } from "@/types";
import { getGCSByCountryCode, getGCSByIPInfo } from "@/utils";

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
    DnsRecords,
    Loading,
    Links,
    WhoisRecord,
    Tags,
    ReverseDnsNames,
    AS,
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

    const getGoogleMapSrc = (gcs: GCS | undefined): string | undefined => {
      if (gcs !== undefined) {
        return `https://maps.google.co.jp/maps?output=embed&q=${gcs.lat},${gcs.long}&z=3`;
      }

      return undefined;
    };

    const getIPInfoTask = generateGetIPTask();
    const getAlertsTask = generateGetAlertsTask();
    const deleteArtifactTask = generateDeleteArtifactTask();
    const enrichArtifactTask = generateEnrichArtifactTask();

    const getAlerts = async () => {
      const params: SearchParams = {
        artifact: props.artifact.data,
        description: undefined,
        page: page.value,
        source: undefined,
        tag: tag.value,
        title: undefined,
        toAt: undefined,
        fromAt: undefined,
        asn: undefined,
        dnsRecord: undefined,
        reverseDnsName: undefined,
      };
      return await getAlertsTask.perform(params);
    };

    const deleteArtifact = async () => {
      const result = window.confirm(
        `Are you sure you want to delete ${props.artifact.data}?`
      );

      if (result) {
        await deleteArtifactTask.perform(props.artifact.id);
        router.push("/");
      }
    };

    const enrichArtifact = async () => {
      await enrichArtifactTask.perform(props.artifact.id);
      router.go(0);
    };

    const updatePage = (newPage: number) => {
      page.value = newPage;
    };

    const resetPage = () => {
      page.value = 1;
    };

    const refreshPage = async () => {
      resetPage();
      await getAlerts();
    };

    const updateTag = (newTag: string | undefined) => {
      if (tag.value === newTag) {
        tag.value = undefined;
      } else {
        tag.value = newTag;
      }
      resetPage();
    };

    onMounted(async () => {
      if (props.artifact.dataType === "ip") {
        let gcs: GCS | undefined = undefined;

        if (props.artifact.geolocation === null) {
          // Use IPInfo if an artifact does not have geolocation
          const ipinfo = await getIPInfoTask.perform(props.artifact.data);
          gcs = getGCSByIPInfo(ipinfo);
          countryCode.value = ipinfo.countryCode;
        } else {
          gcs = getGCSByCountryCode(props.artifact.geolocation.countryCode);
        }

        googleMapSrc.value = getGoogleMapSrc(gcs);
      }
      await getAlerts();
    });

    watch(page, async () => {
      nextTick(async () => await getAlerts());
    });

    return {
      countryCode,
      getAlertsTask,
      googleMapSrc,
      urlscanLiveshotSrc,
      deleteArtifact,
      refreshPage,
      updatePage,
      updateTag,
      enrichArtifact,
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
