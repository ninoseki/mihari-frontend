<template>
  <div>
    <div class="columns">
      <div class="column">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Title</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control">
                <input class="input" type="text" v-model="title" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Description</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control">
                <input class="input" type="text" v-model="description" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Source</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <div class="select">
                  <select v-model="source">
                    <option></option>
                    <option v-for="source_ in sources" :key="source_">
                      {{ source_ }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Artifact</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control">
                <input class="input" type="text" v-model="artifact" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Tag</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <div class="select">
                  <select v-model="tagInput">
                    <option></option>
                    <option v-for="tag_ in tags" :key="tag_">
                      {{ tag_ }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column"></div>
    </div>

    <div class="columns">
      <div class="column">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">From</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control">
                <input class="input" type="date" v-model="fromAt" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">To</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control">
                <input class="input" type="date" v-model="toAt" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from "vue";

import { SearchParams } from "@/types";

export default defineComponent({
  name: "AlertsForm",
  props: {
    tags: {
      type: Array as PropType<string[]>,
      required: true,
    },
    sources: {
      type: Array as PropType<string[]>,
      required: true,
    },
    page: {
      type: Number,
      required: true,
    },
    tag: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const artifact = ref<string | undefined>(undefined);
    const description = ref<string | undefined>(undefined);
    const fromAt = ref<string | undefined>(undefined);
    const tagInput = ref<string | undefined>(props.tag);
    const source = ref<string | undefined>(undefined);
    const title = ref<string | undefined>(undefined);
    const toAt = ref<string | undefined>(undefined);

    const getSearchParams = (): SearchParams => {
      const params: SearchParams = {
        artifact: artifact.value === "" ? undefined : artifact.value,
        description: description.value === "" ? undefined : description.value,
        page: props.page,
        source: source.value === "" ? undefined : source.value,
        tag: tagInput.value === "" ? undefined : tagInput.value,
        title: title.value === "" ? undefined : title.value,
        toAt: toAt.value === "" ? undefined : toAt.value,
        fromAt: fromAt.value === "" ? undefined : fromAt.value,
      };
      return params;
    };

    watch(
      [props.tag],
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (_new, _prev) => {
        tagInput.value = props.tag;
      }
    );

    return {
      artifact,
      description,
      fromAt,
      getSearchParams,
      source,
      title,
      toAt,
      tagInput,
    };
  },
});
</script>
