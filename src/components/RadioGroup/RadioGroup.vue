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
  name: "MereRadioGroup",
  model: mereModel,
  components: {
    ControlsGroup: () => import("@/components/ControlsGroup/ControlsGroup.vue"),
  },
  props: {
    ...label,
    ...validation,
    mereValue: {
      type: [String, Number, Object, Boolean],
    },
  },
  methods: {
    // @ts-ignore
    controlChange(event: Event, { value }: Vue): void {
      this.$emit("change", event, value);
      this.$emit("mereEmit", value);
    },
  },
});
</script>
