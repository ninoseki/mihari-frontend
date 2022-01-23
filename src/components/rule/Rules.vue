<template>
  <div class="table-container">
    <table class="table is-bordered is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>YAML</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="rule in rules.rules" :key="rule.id">
          <td>
            <router-link :to="{ name: 'Rule', params: { id: rule.id } }">{{
              rule.id
            }}</router-link>
          </td>
          <td>
            <YAML :yaml="rule.yaml"></YAML>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <nav class="pagination" role="navigation" aria-label="pagination">
    <ul class="pagination-list">
      <li v-for="page in totalPageCount" :key="page">
        <a
          class="pagination-link mt-2"
          :class="rules.currentPage === page ? 'is-current' : ''"
          @click="updatePage(page)"
        >
          {{ page }}</a
        >
      </li>
    </ul>
  </nav>
  <p>({{ rules.total }} results in total, {{ rules.pageSize }} shown)</p>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import YAML from "@/components/rule/YAML.vue";
import { Rules } from "@/types";

export default defineComponent({
  name: "Rules",
  props: {
    rules: {
      type: Object as PropType<Rules>,
      required: true,
    },
  },
  components: {
    YAML,
  },
  emits: ["update-page", "refresh-page"],
  setup(props, context) {
    const totalPageCount = Math.ceil(props.rules.total / props.rules.pageSize);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
      });
    };

    const updatePage = (page: number) => {
      scrollToTop();
      context.emit("update-page", page);
    };

    const refreshPage = () => {
      scrollToTop();
      context.emit("refresh-page");
    };

    return { totalPageCount, updatePage, refreshPage };
  },
});
</script>
