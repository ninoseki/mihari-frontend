<template>
  <pre ref="pre"><code class="language-yaml">{{ yaml }}</code></pre>
</template>

<script lang="ts">
import hljs from "highlight.js/lib/core";
import yaml from "highlight.js/lib/languages/yaml";
import { defineComponent, onMounted, ref } from "vue";

hljs.registerLanguage("yaml", yaml);

export default defineComponent({
  name: "YAML",
  props: {
    yaml: {
      type: String,
      required: true,
    },
  },
  setup() {
    const pre = ref<HTMLElement | undefined>(undefined);

    onMounted(() => {
      if (pre.value) {
        pre.value.querySelectorAll("code").forEach((elem) => {
          hljs.highlightElement(elem);
        });
      }
    });

    return { pre };
  },
});
</script>

<style scoped>
pre {
  background-color: #282b2e;
}
</style>
