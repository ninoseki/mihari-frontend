<template>
  <div v-if="hasRules">
    <div class="box" v-for="rule in rules.rules" :key="rule.id">
      <table class="table is-fullwidth is-completely-borderless">
        <tr>
          <th>ID</th>
          <td>
            <router-link :to="{ name: 'Rule', params: { id: rule.id } }">{{
              rule.id
            }}</router-link>
          </td>
        </tr>
        <tr>
          <th>Title</th>
          <td>
            {{ rule.title }}
          </td>
        </tr>
        <tr>
          <th>Description</th>
          <td>
            {{ rule.description }}
          </td>
        </tr>
        <tr v-if="rule.tags.length > 0">
          <th>Tags</th>
          <td>
            <Tags :tags="rule.tags" @update-tag="updateTag"></Tags>
          </td>
        </tr>
      </table>
      <p class="help">Created at: {{ rule.createdAt }}</p>
    </div>
  </div>
  <Pagination
    :currentPage="rules.currentPage"
    :total="rules.total"
    :pageSize="rules.pageSize"
  ></Pagination>
  <p class="help">
    ({{ rules.total }} results in total, {{ rules.rules.length }} shown)
  </p>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import Pagination from "@/components/Pagination.vue";
import Tags from "@/components/tag/Tags.vue";
import { Rules } from "@/types";

export default defineComponent({
  name: "RulesItem",
  props: {
    rules: {
      type: Object as PropType<Rules>,
      required: true,
    },
  },
  components: {
    Pagination,
    Tags,
  },
  emits: ["update-page", "refresh-page", "update-tag"],
  setup(props, context) {
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

    const updateTag = (tag: string) => {
      scrollToTop();
      context.emit("update-tag", tag);
    };

    const hasRules = computed(() => {
      return props.rules.rules.length > 0;
    });

    return { updatePage, refreshPage, updateTag, hasRules };
  },
});
</script>
