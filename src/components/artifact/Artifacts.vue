<template>
  <div class="field is-grouped is-grouped-multiline">
    <ArtifactComponent
      v-for="artifact in artifacts"
      :key="artifact.id"
      :artifact="artifact"
    ></ArtifactComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import ArtifactComponent from "@/components/artifact/Artifact.vue";
import { Artifact } from "@/types";

export default defineComponent({
  name: "Artifacts",
  components: {
    ArtifactComponent,
  },
  props: {
    artifacts: {
      type: Array as PropType<Artifact[]>,
      required: true,
    },
  },
});
</script>
