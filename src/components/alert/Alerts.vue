<template>
  <div>
    <Alert
      v-for="(alert, index) in alerts.alerts"
      :alert="alert"
      :key="index"
      @refresh-page="refreshPage"
      @update-tag="updateTag"
    ></Alert>

    <nav class="pagination" role="navigation" aria-label="pagination">
      <ul class="pagination-list">
        <li v-for="page in totalPageCount" :key="page">
          <a
            class="pagination-link mt-2"
            :class="alerts.currentPage === page ? 'is-current' : ''"
            @click="updatePage(page)"
          >
            {{ page }}</a
          >
        </li>
      </ul>
    </nav>
    <p>({{ alerts.total }} results in total, {{ alerts.pageSize }} shown)</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import Alert from "@/components/alert/Alert.vue";
import { Alerts } from "@/types";

export default defineComponent({
  name: "Alerts",
  components: {
    Alert,
  },
  props: {
    alerts: {
      type: Object as PropType<Alerts>,
      required: true,
    },
  },
  setup(props, context) {
    const totalPageCount = Math.ceil(
      props.alerts.total / props.alerts.pageSize
    );

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

    return { totalPageCount, updatePage, updateTag, refreshPage };
  },
});
</script>
