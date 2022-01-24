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
  <Pagination
    :currentPage="rules.currentPage"
    :total="rules.total"
    :pageSize="rules.pageSize"
  ></Pagination>
  <p>({{ rules.total }} results in total, {{ rules.pageSize }} shown)</p>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import Pagination from "@/components/Pagination.vue";
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
    Pagination,
  },
  emits: ["update-page", "refresh-page"],
  setup(_, context) {
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

    return { updatePage, refreshPage };
  },
});
</script>
