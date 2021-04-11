<template>
  <div>
    <div class="box mb-6">
      <Form
        ref="form"
        :sources="getSourcesTask.last?.value || []"
        :tags="getTagsTask.last?.value || []"
        :page="page"
        :tag="tag"
      ></Form>

      <hr />

      <div class="columns">
        <div class="column">
          <div class="field is-grouped is-grouped-centered">
            <p class="control">
              <a class="button is-primary" @click="search">
                <span class="icon is-small">
                  <i class="fas fa-search"></i>
                </span>
                <span>Search</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="getAlertsTask.performCount > 0">
      <hr />

      <Loading v-if="getAlertsTask.isRunning"></Loading>

      <AlertsComponent
        :alerts="getAlertsTask.last.value"
        v-if="getAlertsTask.last?.value"
        @refresh-page="refreshPage"
        @update-page="updatePage"
        @update-tag="updateTag"
      ></AlertsComponent>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted, ref, watch } from "vue";
import { useAsyncTask } from "vue-concurrency";

import { API } from "@/api";
import AlertsComponent from "@/components/alert/Alerts.vue";
import Form from "@/components/alert/Form.vue";
import Loading from "@/components/Loading.vue";
import { Alerts, SearchParams } from "@/types";

export default defineComponent({
  name: "AlertsWrapper",
  components: {
    AlertsComponent,
    Form,
    Loading,
  },
  setup() {
    const page = ref(1);
    const tag = ref<string | undefined>(undefined);
    const form = ref<InstanceType<typeof Form>>();

    const getAlertsTask = useAsyncTask<Alerts, []>(async () => {
      const params = form.value?.getSearchParams() as SearchParams;
      return await API.getAlerts(params);
    });

    const getTagsTask = useAsyncTask<string[], []>(async () => {
      return await API.getTags();
    });

    const getSourcesTask = useAsyncTask<string[], []>(async () => {
      return await API.getSources();
    });

    const updatePage = (newPage: number) => {
      page.value = newPage;
    };

    const resetPage = () => {
      page.value = 1;
    };

    const search = async () => {
      // reset page
      resetPage();

      await getAlertsTask.perform();
    };

    const updateTag = (newTag: string | undefined) => {
      if (tag.value === newTag) {
        tag.value = undefined;
      } else {
        tag.value = newTag;
      }

      nextTick(async () => await search());
    };

    const refreshPage = async () => {
      // it is just an alias of search
      // this function will be invoked when an alert is deleted
      await search();
    };

    watch(
      [page],
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      async (_current, _prev) => {
        nextTick(async () => await getAlertsTask.perform());
      }
    );

    onMounted(async () => {
      await getTagsTask.perform();
      await getSourcesTask.perform();

      await getAlertsTask.perform();
    });

    return {
      getAlertsTask,
      getSourcesTask,
      getTagsTask,
      refreshPage,
      search,
      tag,
      updatePage,
      updateTag,
      form,
      page,
    };
  },
});
</script>
