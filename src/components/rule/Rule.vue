<template>
  <div class="column">
    <h2 class="is-size-2 mb-4">Rule</h2>

    <h4 class="is-size-4">Information</h4>
    <div class="table-container">
      <table class="table is-bordered is-fullwidth">
        <tr>
          <th>ID</th>
          <td>
            {{ rule.id }}
            <span class="buttons is-pulled-right">
              <button
                class="button is-primary is-light is-small"
                @click="runRule"
              >
                <span>Run</span>
                <span class="icon is-small">
                  <i class="fas fa-arrow-right"></i>
                </span>
              </button>
              <button class="button is-light is-small" @click="deleteRule">
                <span>Delete</span>
                <span class="icon is-small">
                  <i class="fas fa-times"></i>
                </span>
              </button>
            </span>
          </td>
        </tr>
        <tr>
          <th>YAML</th>
          <td>
            <YAML :yaml="rule.yaml"></YAML>
          </td>
        </tr>
      </table>
    </div>
  </div>

  <hr />

  <div class="column">
    <h2 class="is-size-2 mb-4">Related alerts</h2>

    <Alerts :source="rule.id"></Alerts>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { useRouter } from "vue-router";

import { generateDeleteRuleTask, generateRunRuleTask } from "@/api-helper";
import Alerts from "@/components/alert/AlertsWithPagination.vue";
import YAML from "@/components/rule/YAML.vue";
import { Rule } from "@/types";

export default defineComponent({
  name: "Rule",
  props: {
    rule: {
      type: Object as PropType<Rule>,
      required: true,
    },
  },
  components: {
    YAML,
    Alerts,
  },
  setup(props) {
    const router = useRouter();

    const deleteRuleTask = generateDeleteRuleTask();
    const runRuleTask = generateRunRuleTask();

    const deleteRule = async () => {
      const result = window.confirm(
        `Are you sure you want to delete ${props.rule.id}?`
      );

      if (result) {
        await deleteRuleTask.perform(props.rule.id);
        router.push("/");
      }
    };

    const runRule = async () => {
      await runRuleTask.perform(props.rule.id);
      router.go(0);
    };

    return {
      deleteRule,
      runRule,
    };
  },
});
</script>
