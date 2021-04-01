<template>
  <div>
    <div class="box" v-for="(item, key) in config" :key="key">
      <div class="content is-normal">
        <h4 class="is-size-4">
          {{ key }}
        </h4>

        <div class="buttons">
          <button class="button is-small is-info">{{ item.type }}</button>

          <button
            class="button is-success is-small ml-1"
            v-if="item.isConfigured"
          >
            <span class="icon is-small">
              <i class="fas fa-check"></i>
            </span>
            <span>Set</span>
          </button>
          <button class="button is-warning is-small ml-1" v-else>
            <span class="icon is-small">
              <i class="fas fa-exclamation"></i>
            </span>
            <span>Not set</span>
          </button>
        </div>

        <ul>
          <li v-for="(kv, index) in item.values" :key="index">
            <strong>{{ kv.key }}</strong
            >: {{ kv.value || "N/A" }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { Config } from "@/types";

export default defineComponent({
  name: "Config",
  props: {
    config: {
      type: Object as PropType<Config>,
      required: true,
    },
  },
});
</script>
