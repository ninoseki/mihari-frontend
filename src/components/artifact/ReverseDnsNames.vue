<template>
  <div class="tags are-medium">
    <span class="tag is-light" v-for="name in reverseDnsNames" :key="name">{{
      name
    }}</span>
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
