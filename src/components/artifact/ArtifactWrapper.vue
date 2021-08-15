<template>
  <div>
    <Loading v-if="getArtifactTask.isRunning"></Loading>

    <ErrorMessage
      v-if="getArtifactTask.isError"
      :error="getArtifactTask.last?.error"
    ></ErrorMessage>

    <ArtifactComponent
      :artifact="getArtifactTask.last.value"
      v-if="getArtifactTask.last?.value"
    ></ArtifactComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch } from "vue";
import { useAsyncTask } from "vue-concurrency";

import { API } from "@/api";
import ArtifactComponent from "@/components/artifact/Artifact.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";
import Loading from "@/components/Loading.vue";
import { Artifact } from "@/types";

export default defineComponent({
  name: "ArtifactWrapper",
  components: {
    ArtifactComponent,
    Loading,
    ErrorMessage,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const getArtifactTask = useAsyncTask<Artifact, []>(async () => {
      return await API.getArtifact(props.id);
    });

    onMounted(async () => {
      await getArtifactTask.perform();
    });

    watch(
      props,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      async (_current, _prev) => {
        await getArtifactTask.perform();
      }
    );

    return {
      getArtifactTask,
    };
  },
});
</script>
