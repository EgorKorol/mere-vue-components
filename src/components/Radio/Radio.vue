<template>
  <label
    class="mere-radio"
    :class="[
      { 'mere-radio--disabled': $attrs.disabled },
      variant && `mere-variant-${variant}`,
      size && `mere-size-${size}`,
    ]"
  >
    <input
      class="mere-radio__input"
      type="radio"
      :checked="checked"
      :required="required"
      v-bind="$attrs"
      @change="onChange"
    />
    <Label
      as="div"
      :required="required"
      :size="size"
      :hidden-label="hiddenLabel"
    >
      {{ label }}
    </Label>
  </label>
</template>

<script lang="ts">
import Vue from "vue";
import { variant, size, label } from "@/global/props";
import { mereModel } from "@/global/mixins";

export default Vue.extend({
  name: "MereRadio",
  inheritAttrs: false,
  model: mereModel,
  components: {
    Label: () => import("@/components/Label/Label.vue"),
  },
  props: {
    ...variant,
    ...size,
    ...label,
    value: {
      type: [String, Number, Boolean, Object],
    },
    mereValue: {
      type: [String, Number, Boolean, Object],
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    checked(): boolean {
      if (
        typeof this.mereValue === "object" ||
        typeof this.value === "object"
      ) {
        return JSON.stringify(this.mereValue) === JSON.stringify(this.value);
      }

      if (typeof this.mereValue === "boolean") {
        return this.mereValue;
      }

      return this.mereValue === this.value;
    },
  },
  methods: {
    onChange(event: Event): void {
      const value = this.value || (event.target as HTMLInputElement).checked;

      this.$emit("mereEmit", value);
      this.$emit("change", event, value);
    },
  },
});
</script>

<style lang="scss">
@use "@/assets/scss/mixins";

.mere-radio {
  padding: calc(var(--font-size) / 2 - 4px);
  border-radius: 4px;
  transition: background-color 0.15s ease-in;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-align: left;
  word-break: break-word;

  &:hover {
    background-color: hsl(var(--hue), 45%, 95%);

    .mere-radio__input {
      background-color: hsl(var(--hue), 100%, 100%);
    }
  }

  &--disabled {
    @include mixins.disabled;
  }
}

.mere-radio__input {
  background-color: hsl(var(--hue), 45%, 95%);
  flex-shrink: 0;
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  color: currentColor;
  font-size: inherit;
  width: calc(var(--font-size) + 4px);
  height: calc(var(--font-size) + 4px);
  position: relative;
  border: 2px solid hsl(var(--hue), 60%, 55%);
  border-radius: 50%;
  transition: background-color 0.15s ease-in;
  margin-right: calc(var(--font-size) / 2);

  &:checked {
    &::before {
      content: "";
      display: inline-block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transform: scale(0.6);
      border-radius: inherit;
      background-color: hsl(var(--hue), 45%, 45%);
    }
  }
}
</style>
