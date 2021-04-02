<template>
  <table class="table is-bordered is-fullwidth">
    <tbody>
      <tr>
        <th><strong>ID</strong></th>
        <td>
          {{ alert.id }}

          <button
            class="button is-light is-small is-pulled-right"
            @click="deleteAlert"
          >
            <span>Delete</span>
            <span class="icon is-small">
              <i class="fas fa-times"></i>
            </span>
          </button>
        </td>
      </tr>
      <tr>
        <th><strong>Title</strong></th>
        <td>
          {{ alert.title }}
        </td>
      </tr>
      <tr>
        <th><strong>Description</strong></th>
        <td>
          {{ alert.description }}
        </td>
      </tr>
      <tr>
        <th><strong>Source</strong></th>
        <td>
          {{ alert.source }}
        </td>
      </tr>
      <tr>
        <th><strong>Artifacts</strong></th>
        <td>
          <Artifacts :artifacts="alert.artifacts"></Artifacts>
        </td>
      </tr>
      <tr>
        <th><strong>Tags</strong></th>
        <td>
          <Tags :tags="alert.tags" @update-tag="updateTag"></Tags>
        </td>
      </tr>
      <tr>
        <th><strong>Created at</strong></th>
        <td>
          {{ alert.createdAt }}
          ({{ getHumanizedRelativeTime(alert.createdAt) }})
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { useAsyncTask } from "vue-concurrency";

import { API } from "@/api";
import Artifacts from "@/components/artifact/Artifacts.vue";
import Tags from "@/components/tag/Tags.vue";
import { Alert } from "@/types";
import { getHumanizedRelativeTime } from "@/utils";

export default defineComponent({
  name: "Alert",
  components: {
    Artifacts,
    Tags,
  },
  props: {
    alert: {
      type: Object as PropType<Alert>,
      required: true,
    },
  },
  setup(props, context) {
    const updateTag = (tag: string) => {
      context.emit("update-tag", tag);
    };

    const deleteAlertTask = useAsyncTask<void, []>(async () => {
      return await API.deleteAlert(props.alert.id);
    });

    const deleteAlert = async () => {
      const result = window.confirm(
        `Are you sure you want to delete ${props.alert.title} (ID: ${props.alert.id})?`
      );

      if (result) {
        await deleteAlertTask.perform();
        // refresh the page
        context.emit("refresh-page");
      }
    };

    return { updateTag, deleteAlert, getHumanizedRelativeTime };
  },
});
</script>

<style scoped>
table.table tbody tr th {
  width: 120px;
}
</style>
