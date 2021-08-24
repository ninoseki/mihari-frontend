<template>
  <div class="field is-grouped">
    <div class="control">
      <div class="tags has-addons are-medium">
        <span class="tag is-dark">ASN</span>
        <span class="tag is-light">{{ autonomousSystem.asn }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { AutonomousSystem } from "@/types";

export default defineComponent({
  name: "AS",
  props: {
    autonomousSystem: {
      type: Object as PropType<AutonomousSystem>,
      required: true,
    },
  },
});
</script>
