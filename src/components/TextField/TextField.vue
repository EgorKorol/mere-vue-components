<template>
  <div class="mere-text-field">
    <Label
      class="mere-text-field__label"
      :required="required"
      :labelFor="uniqId"
      :hidden-label="hiddenLabel"
      :size="size"
    >
      {{ label }}
    </Label>
    <Input
      :id="uniqId"
      :variant="computedVariant"
      :aria-invalid="invalid"
      :aria-describedby="ariaDescribedby"
      :value="value"
      :mere-value="mereValue"
      :size="size"
      v-bind="$attrs"
      v-on="$listeners"
      @input="onInput"
    />
    <ControlText
      v-if="helpText || errorText"
      :size="size"
      :id="uniqId"
      :help-text="helpText"
      :error-text="errorText"
      :error="invalid"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { variant, size, label, validation } from "@/global/props";
import { mereModel } from "@/global/mixins";
import { getAriaDescribedby, getComputedVariant } from "@/global/helpers";

export default Vue.extend({
  name: "MereTextField",
  inheritAttrs: false,
  model: mereModel,
  components: {
    Label: () => import("@/components/Label/Label.vue"),
    Input: () => import("@/components/Input/Input.vue"),
    ControlText: () => import("@/components/ControlText/ControlText.vue"),
  },
  props: {
    ...variant,
    ...size,
    ...label,
    ...validation,
    mereValue: {
      type: [String, Number],
    },
    value: {
      type: [String, Number],
    },
  },
  computed: {
    uniqId(): string {
      // @ts-ignore
      return this.$attrs.id || this._uid;
    },
    ariaDescribedby(): string | null {
      return getAriaDescribedby({
        helpText: this.helpText,
        errorText: this.errorText,
        // @ts-ignore
        id: this.uniqId,
      });
    },
    computedVariant(): string | null {
      return getComputedVariant({
        invalid: this.invalid,
        valid: this.valid,
        variant: this.variant,
      });
    },
  },
  methods: {
    onInput(event: Event): void {
      this.$emit("input", event);
      this.$emit("mereEmit", (event.target as HTMLInputElement).value);
    },
  },
});
</script>

<style lang="scss">
@use "@/assets/scss/mixins";

.mere-text-field__label {
  @include mixins.labelGap;
}
</style>
