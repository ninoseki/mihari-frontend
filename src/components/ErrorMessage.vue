<template>
  <div class="notification is-danger is-light">
    {{ error }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Error",
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
});
</script>
