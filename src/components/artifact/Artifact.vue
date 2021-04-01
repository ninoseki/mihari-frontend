<template>
  <div class="control" v-if="!isDeleted">
    <div class="tags has-addons">
      <span class="tag">{{ artifact.data }}</span>
      <span class="tag is-delete" @click="deleteArtifact"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { useAsyncTask } from "vue-concurrency";

import { API } from "@/api";
import { Artifact } from "@/types";

export default defineComponent({
  name: "Artifact",
  props: {
    artifact: {
      type: Object as PropType<Artifact>,
      required: true,
    },
  },
  setup(props) {
    const isDeleted = ref(false);

    const deleteArtifactTask = useAsyncTask<void, []>(async () => {
      return await API.deleteArtifact(props.artifact.id);
    });

    const deleteArtifact = async () => {
      const result = window.confirm(
        `Are you sure you want to delete ${props.artifact.data}?`
      );

      if (result) {
        await deleteArtifactTask.perform();
        isDeleted.value = true;
      }
    };

    return { isDeleted, deleteArtifact };
  },
});
</script>
