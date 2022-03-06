<template>
  <div class="box mb-6">
    <div class="field has-addons">
      <p class="control">
        <a class="button is-static">mihari</a>
      </p>
      <p class="control is-expanded">
        <input class="input" type="text" v-model="command" />
      </p>
    </div>

    <div class="field is-grouped is-grouped-centered">
      <p class="control">
        <a class="button is-primary" @click="runCommand">
          <span class="icon is-small">
            <i class="fas fa-play"></i>
          </span>
          <span>Run</span>
        </a>
      </p>
    </div>
  </div>

  <hr />

  <Loading v-if="runCommandTask.isRunning"></Loading>

  <ErrorMessage
    v-if="runCommandTask.isError"
    :error="runCommandTask.last?.error"
  ></ErrorMessage>

  <div v-if="runCommandTask.last?.value">
    <div
      class="notification is-success is-light"
      v-if="runCommandTask.last.value.success"
    >
      Command ran successfully
    </div>
    <div class="notification is-danger is-light" v-else>
      Something went wrong...
    </div>

    <div class="content is-normal">
      <h4 class="is-size-4">Output</h4>
      <pre>{{ runCommandTask.last.value.output }}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

import { generateRunCommandTask } from "@/api-helper";
import ErrorMessage from "@/components/ErrorMessage.vue";
import Loading from "@/components/Loading.vue";

export default defineComponent({
  name: "CommandItem",
  components: {
    Loading,
    ErrorMessage,
  },
  setup() {
    const command = ref<string>("help");

    const runCommandTask = generateRunCommandTask();
    const runCommand = async () => {
      return await runCommandTask.perform(command.value);
    };

    onMounted(async () => {
      await runCommand();
    });

    return {
      command,
      runCommand,
      runCommandTask,
    };
  },
});
</script>
