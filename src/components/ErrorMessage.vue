<template>
  <div class="notification is-danger is-light">
    <p v-if="error.response.data?.message">{{ error.response.data.message }}</p>
    <p v-else>{{ error }}</p>
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
