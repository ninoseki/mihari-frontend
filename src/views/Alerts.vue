<template>
  <Alerts></Alerts>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Alerts from "@/components/alert/AlertsWrapper.vue";

export default defineComponent({
  name: "AlertsView",
  components: {
    Alerts,
  },
});
</script>
