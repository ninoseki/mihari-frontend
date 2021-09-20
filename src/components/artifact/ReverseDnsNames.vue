<template>
  <div class="tags are-medium">
    <router-link
      class="tag"
      v-for="name in reverseDnsNames"
      :key="name"
      :to="{
        name: 'Alerts',
        query: { reverseDnsName: name },
      }"
    >
      {{ name }}
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "ReverseDnsNames",
  props: {
    reverseDnsNames: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
});
</script>
