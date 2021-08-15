<template>
  <div>
    <Loading v-if="getConfigTask.isRunning"></Loading>

    <ErrorMessage
      v-if="getConfigTask.isError"
      :error="getConfigTask.last?.error"
    ></ErrorMessage>

    <ConfigComponent
      :config="getConfigTask.last.value"
      v-if="getConfigTask.last?.value"
    ></ConfigComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useAsyncTask } from "vue-concurrency";

import { API } from "@/api";
import ConfigComponent from "@/components/config/Config.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";
import Loading from "@/components/Loading.vue";
import { Config } from "@/types";

export default defineComponent({
  name: "ConfigWrapper",
  components: {
    ConfigComponent,
    Loading,
    ErrorMessage,
  },
  setup() {
    const getConfigTask = useAsyncTask<Config, []>(async () => {
      return await API.getConfig();
    });

    onMounted(async () => {
      await getConfigTask.perform();
    });

    return { getConfigTask };
  },
});
</script>
