<template>
  <Config></Config>
</template>

<script lang="ts">
import { useTitle } from "@vueuse/core";
import { defineComponent } from "vue";

import Config from "@/components/config/ConfigWrapper.vue";

export default defineComponent({
  name: "ConfigView",
  components: {
    Config,
  },
  setup() {
    useTitle("Config - Mihari");
  },
});
</script>
