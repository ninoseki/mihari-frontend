<template>
  <Config></Config>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Config from "@/components/config/ConfigWrapper.vue";

export default defineComponent({
  name: "ConfigView",
  components: {
    Config,
  },
});
</script>
