<template>
  <div class="tags are-medium">
    <span class="tag is-info" v-for="tag in tags" :key="tag">{{ tag }}</span>
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
