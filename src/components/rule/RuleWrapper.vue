<template>
  <Loading v-if="getRuleTask.isRunning"></Loading>

  <ErrorMessage
    v-if="getRuleTask.isError"
    :error="getRuleTask.last?.error"
  ></ErrorMessage>

  <Rule :rule="getRuleTask.last.value" v-if="getRuleTask.last?.value"></Rule>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

import { generateGetRuleTask } from "@/api-helper";
import ErrorMessage from "@/components/ErrorMessage.vue";
import Loading from "@/components/Loading.vue";
import Rule from "@/components/rule/Rule.vue";

export default defineComponent({
  name: "RuleWrapper",
  components: {
    Rule,
    Loading,
    ErrorMessage,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const getRuleTask = generateGetRuleTask();

    const getRule = async () => {
      await getRuleTask.perform(props.id);
    };

    onMounted(async () => {
      await getRule();
    });

    return {
      getRuleTask,
    };
  },
});
</script>
