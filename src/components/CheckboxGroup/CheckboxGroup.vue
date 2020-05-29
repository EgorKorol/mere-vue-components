<template>
  <ControlsGroup
    :label="label"
    :hidden-label="hiddenLabel"
    :invalid="invalid"
    :valid="valid"
    :help-text="helpText"
    :error-text="errorText"
    :error="invalid"
    :required="required"
    :mere-value="mereValue"
    @change="controlChange"
  >
    <slot />
  </ControlsGroup>
</template>

<script lang="ts">
import Vue from "vue";
import { mereModel } from "@/global/mixins";
import { label, validation } from "@/global/props";

export default Vue.extend({
  name: "MereCheckboxGroup",
  model: mereModel,
  components: {
    ControlsGroup: () => import("@/components/ControlsGroup/ControlsGroup.vue"),
  },
  props: {
    ...label,
    ...validation,
    mereValue: {
      type: [Array],
    },
  },
  methods: {
    // @ts-ignore
    controlChange(event: Event, { value }: Vue): void {
      this.$emit(
        "change",
        event,
        value || (event.target as HTMLInputElement).value
      );

      const valueAsString = JSON.stringify(value);
      const findIndexFunction =
        typeof value === "object"
          ? (item: unknown) => JSON.stringify(item) === valueAsString
          : (item: unknown) => item === value;
      const index = this.mereValue.findIndex(findIndexFunction);

      if (index === -1) {
        this.$emit("mereEmit", [...this.mereValue, value]);
      }

      if (index !== -1) {
        const filterFunction =
          typeof value === "object"
            ? (item: unknown) => JSON.stringify(item) !== valueAsString
            : (item: unknown) => item !== value;

        this.$emit("mereEmit", this.mereValue.filter(filterFunction));
      }
    },
  },
});
</script>
