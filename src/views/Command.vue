<template>
  <Command></Command>
</template>

<script lang="ts">
import { useTitle } from "@vueuse/core";
import { defineComponent } from "vue";

import Command from "@/components/command/Command.vue";

export default defineComponent({
  name: "CommandView",
  components: {
    Command,
  },
  setup() {
    useTitle("Command - Mihari");
  },
});
</script>
