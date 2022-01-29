<template>
  <div class="box mb-6">
    <Form
      ref="form"
      :tags="getTagsTask.last?.value || []"
      :page="page"
      :tag="tag"
    ></Form>

    <hr />

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

  <div v-if="getRulesTask.performCount > 0">
    <hr />

    <Loading v-if="getRulesTask.isRunning"></Loading>

    <ErrorMessage
      v-if="getRulesTask.isError"
      :error="getRulesTask.last?.error"
    ></ErrorMessage>

    <Rules
      :rules="getRulesTask.last.value"
      v-if="getRulesTask.last?.value"
      @refresh-page="refreshPage"
      @update-page="updatePage"
    ></Rules>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted, ref, watch } from "vue";

import { generateGetRulesTask, generateGetTagsTask } from "@/api-helper";
import ErrorMessage from "@/components/ErrorMessage.vue";
import Loading from "@/components/Loading.vue";
import Form from "@/components/rule/Form.vue";
import Rules from "@/components/rule/Rules.vue";
import { RuleSearchParams } from "@/types";

export default defineComponent({
  name: "RulesWrapper",
  components: {
    Rules,
    Loading,
    Form,
    ErrorMessage,
  },
  setup() {
    const page = ref(1);
    const tag = ref<string | undefined>(undefined);
    const form = ref<InstanceType<typeof Form>>();

    const getRulesTask = generateGetRulesTask();
    const getTagsTask = generateGetTagsTask();

    const getRules = async () => {
      const params = form.value?.getSearchParams() as RuleSearchParams;
      return await getRulesTask.perform(params);
    };

    const updatePage = (newPage: number) => {
      page.value = newPage;
    };

    const resetPage = () => {
      page.value = 1;
    };

    const search = async () => {
      // reset page
      resetPage();

      await getRules();
    };

    const refreshPage = async () => {
      // it is just an alias of search
      // this function will be invoked when a rule is deleted
      await search();
    };

    watch(page, async () => {
      nextTick(async () => await getRules());
    });

    onMounted(() => {
      getTagsTask.perform();
      getRules();
    });

    return {
      form,
      getRulesTask,
      getTagsTask,
      page,
      tag,
      refreshPage,
      search,
      updatePage,
    };
  },
});
</script>
