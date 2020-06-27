<template functional>
  <details
    class="mere-details"
    :class="[
      props.size && `mere-size-${props.size}`,
      props.variant && `mere-variant-${props.variant}`,
      data.class,
      data.staticClass,
    ]"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <summary class="mere-details__summary">
      <slot name="summary" />
    </summary>
    <div class="mere-details__body">
      <slot name="details" />
    </div>
  </details>
</template>

<script lang="ts">
import Vue from "vue";
import { variant, size } from "@/global/props";

export default Vue.extend({
  name: "MereDetails",
  props: {
    ...variant,
    ...size,
  },
});
</script>

<style lang="scss">
.mere-details {
  border-radius: 4px;
  color: hsl(var(--hue), 25%, 25%);
  border: 1px solid hsl(var(--hue), 70%, 70%);
  overflow: hidden;
  margin-top: calc(var(--font-size) / 4);
  margin-bottom: calc(var(--font-size) / 4);
}

.mere-details__summary {
  display: block;
  position: relative;
  cursor: pointer;
  font-size: var(--font-size);
  word-break: break-word;
  padding: calc(var(--font-size) / 1.5) var(--font-size);
  background-color: hsl(var(--hue), 60%, 94%);
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: hsl(var(--hue), 60%, 90%);
  }

  &:focus {
    outline: none;
    background-color: hsl(var(--hue), 60%, 88%);
  }

  &::before,
  &::after {
    width: 0.75em;
    height: 2px;
    position: absolute;
    top: 50%;
    right: var(--font-size);
    content: "";
    background-color: currentColor;
    transform: translateY(-50%);
    transition: transform 0.2s ease-in-out;
  }

  &::after {
    transform: translateY(-50%) rotate(90deg);

    [open] & {
      transform: translateY(-50%) rotate(180deg);
    }
  }

  &::-webkit-details-marker {
    display: none;
  }

  [open] & {
    border-bottom: 1px solid hsl(var(--hue), 70%, 70%);
    background-color: hsl(var(--hue), 60%, 88%);
  }
}

.mere-details__body {
  font-size: calc(var(--font-size) - 1px);
  padding: calc(var(--font-size) / 1.5) var(--font-size);
  background-color: hsl(var(--hue), 60%, 99%);
}
</style>
