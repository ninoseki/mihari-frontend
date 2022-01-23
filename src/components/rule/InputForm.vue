<template>
  <div class="block my-editor-wrapper">
    <PrismEditor
      class="my-editor"
      v-model="yamlInput"
      :highlight="highlighter"
    ></PrismEditor>
  </div>
</template>

<script lang="ts">
import "vue-prism-editor/dist/prismeditor.min.css";
import "prismjs/themes/prism-tomorrow.css";

import hljs from "highlight.js/lib/core";
import yaml from "highlight.js/lib/languages/yaml";
import { defineComponent, ref, watchEffect } from "vue";
import { PrismEditor } from "vue-prism-editor";

hljs.registerLanguage("yaml", yaml);

export default defineComponent({
  name: "RuleInputForm",
  components: {
    PrismEditor,
  },
  props: {
    yaml: {
      type: String,
      required: true,
    },
  },
  emits: ["update-yaml"],
  setup(props, context) {
    const yamlInput = ref(props.yaml);

    const highlighter = (code: string) => {
      return hljs.highlight(code, { language: "yaml" }).value;
    };

    watchEffect(() => {
      context.emit("update-yaml", yamlInput.value);
    });

    return { yamlInput, highlighter };
  },
});
</script>

<style scoped>
.my-editor {
  background: #282b2e;
  color: #ccc;

  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}

.my-editor-wrapper {
  background: #282b2e;
  padding: 10px;
}
</style>
