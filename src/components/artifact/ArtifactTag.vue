<template>
  <div class="control" v-if="!isDeleted">
    <div
      class="tags has-addons"
      v-on:mouseover="showDeleteButton"
      v-on:mouseleave="hideDeleteButton"
    >
      <router-link
        class="tag"
        :to="{ name: 'Artifact', params: { id: artifact.id } }"
        >{{ artifact.data }}</router-link
      >
      <span
        class="tag is-delete"
        v-if="isDeleteButtonEnabled"
        @click="deleteArtifact"
      ></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { useAsyncTask } from "vue-concurrency";

import { API } from "@/api";
import { Artifact } from "@/types";

export default defineComponent({
  name: "ArtifactTag",
  props: {
    artifact: {
      type: Object as PropType<Artifact>,
      required: true,
    },
  },
  setup(props) {
    const isDeleted = ref(false);
    const isDeleteButtonEnabled = ref(false);

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

    const showDeleteButton = () => {
      isDeleteButtonEnabled.value = true;
    };

    const hideDeleteButton = () => {
      isDeleteButtonEnabled.value = false;
    };

    return {
      isDeleted,
      deleteArtifact,
      showDeleteButton,
      hideDeleteButton,
      isDeleteButtonEnabled,
    };
  },
});
</script>
