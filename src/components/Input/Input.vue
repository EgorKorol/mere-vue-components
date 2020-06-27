<template>
  <div class="mere-input">
    <input
      v-if="!textarea"
      class="mere-input__input"
      :class="[
        { 'mere-input__input--outlined': outlined },
        variant && `mere-variant-${variant}`,
        size && `mere-size-${size}`,
      ]"
      :value="mereValue || value"
      v-bind="$attrs"
      v-on="$listeners"
      @input="input"
    />
    <textarea
      v-else
      class="mere-input__input mere-input__input--textarea"
      :class="[
        { 'mere-input__input--outlined': outlined },
        variant && `mere-variant-${variant}`,
        size && `mere-size-${size}`,
      ]"
      :value="mereValue || value"
      v-bind="$attrs"
      v-on="$listeners"
      @input="input"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { variant, size } from "@/global/props";
import { mereModel } from "@/global/mixins";

export default Vue.extend({
  name: "MereInput",
  inheritAttrs: false,
  model: mereModel,
  props: {
    ...variant,
    ...size,
    mereValue: {
      type: [String, Number],
    },
    value: {
      type: [String, Number],
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    textarea: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    input(event: Event): void {
      this.$emit("input", event);
      this.$emit("mereEmit", (event.target as HTMLInputElement).value);
    },
  },
});
</script>

<style lang="scss">
.mere-input {
  position: relative;
}

.mere-input__input {
  background-color: hsl(var(--hue), 50%, 95%);
  font-family: inherit;
  font-size: var(--font-size);
  padding: calc(var(--font-size) / 2);
  display: block;
  min-width: calc(var(--font-size) * 6);
  width: 100%;
  border-radius: 4px;
  border: 2px solid hsl(var(--hue), 90%, 75%);
  transition: border-color 0.15s ease-in;
  box-sizing: border-box;

  &:hover {
    border-color: hsl(var(--hue), 90%, 60%);
  }

  &:focus {
    outline: none;
    border-color: hsl(var(--hue), 90%, 40%);
  }

  &--outlined {
    background-color: transparent;
  }

  &--textarea {
    min-height: calc(var(--font-size) * 6);
    resize: vertical;
  }
}
</style>
