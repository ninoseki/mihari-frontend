<template>
  <div class="tags are-medium">
    <router-link
      class="tag is-info"
      v-for="tag in tags"
      :key="tag"
      :to="{
        name: 'Alerts',
        query: { tag: tag },
      }"
    >
      {{ tag }}
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "Tags",
  props: {
    tags: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
});
</script>
