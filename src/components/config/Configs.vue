<template>
  <div class="box">
    <div class="table-container">
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Status</th>
            <th>Key-Value(s)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="config in configs" :key="config.name">
            <td>
              {{ config.name }}
            </td>
            <td>
              {{ config.status.type }}
            </td>
            <td>
              <button
                class="button is-success is-small ml-1"
                v-if="config.status.isConfigured"
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
            </td>
            <td>
              <ul>
                <li v-for="(kv, index) in config.status.values" :key="index">
                  <strong> {{ kv.key }} </strong>: {{ kv.value || "N/A" }}
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { Config } from "@/types";

export default defineComponent({
  name: "Configs",
  props: {
    configs: {
      type: Array as PropType<Config[]>,
      required: true,
    },
  },
});
</script>
