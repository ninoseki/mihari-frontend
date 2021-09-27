<template>
  <div>
    <Loading v-if="getConfigsTask.isRunning"></Loading>

    <ErrorMessage
      v-if="getConfigsTask.isError"
      :error="getConfigsTask.last?.error"
    ></ErrorMessage>

    <Configs
      :configs="getConfigsTask.last.value"
      v-if="getConfigsTask.last?.value"
    ></Configs>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useAsyncTask } from "vue-concurrency";

import { API } from "@/api";
import Configs from "@/components/config/Configs.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";
import Loading from "@/components/Loading.vue";
import { Config } from "@/types";

export default defineComponent({
  name: "ConfigsWrapper",
  components: {
    Configs,
    Loading,
    ErrorMessage,
  },
  setup() {
    const getConfigsTask = useAsyncTask<Config[], []>(async () => {
      return await API.getConfigs();
    });

    onMounted(async () => {
      await getConfigsTask.perform();
    });

    return { getConfigsTask };
  },
});
</script>
