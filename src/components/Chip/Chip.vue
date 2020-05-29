<template functional>
  <component
    class="mere-chip"
    :class="[
      {
        'mere-chip--outlined': props.outlined,
        'mere-chip--removable': props.removable,
        'mere-chip--clickable': props.clickable,
      },
      props.variant && `mere-variant-${props.variant}`,
      props.size && `mere-size-${props.size}`,
      data.class,
      data.staticClass,
    ]"
    :is="props.clickable ? 'button' : 'div'"
    :type="props.clickable && 'button'"
    v-bind="data.attrs"
    v-on="props.clickable && listeners"
  >
    <slot />
    <button
      v-if="props.removable"
      class="mere-chip__remove"
      aria-label="Remove the chip"
      type="button"
      @click.stop="listeners.remove"
    >
      <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        ></path>
      </svg>
      <!-- <svg focusable="false" aria-hidden="true" viewBox="0 0 365.696 365.696">
        <path
          d="M243.188 182.86L356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"
        />
      </svg> -->
    </button>
  </component>
</template>

<script lang="ts">
import Vue from "vue";
import { variant, size } from "@/global/props";

export default Vue.extend({
  name: "MereChip",
  props: {
    ...variant,
    ...size,
    clickable: {
      type: Boolean,
      default: false,
    },
    removable: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss">
.mere-chip {
  color: hsl(var(--hue), 20%, 15%);
  background-color: hsl(var(--hue), 70%, 90%);
  min-width: calc(var(--font-size) * 2);
  border-radius: var(--font-size);
  padding: calc(var(--font-size) / 6) calc(var(--font-size) / 1.5);
  font-size: calc(var(--font-size) - 2px);
  text-align: center;
  transition: background-color 0.15s ease-out;
  border: 1px solid hsl(var(--hue), 90%, 75%);
  line-height: 1.4;
  word-break: break-word;
  text-decoration: none;
  display: inline-flex;
  align-items: center;

  &--outlined {
    background-color: transparent;
    color: hsl(var(--hue), 70%, 20%);
  }

  &--clickable {
    font-family: inherit;
    appearance: none;
    -webkit-appearance: none;
    cursor: pointer;

    &:hover {
      background-color: hsl(var(--hue), 90%, 95%);
      border-color: hsl(var(--hue), 90%, 40%);
      color: hsl(var(--hue), 10%, 10%);
    }

    &:focus {
      border-color: hsl(var(--hue), 90%, 40%);
      color: hsl(var(--hue), 10%, 10%);
      outline: none;
    }

    &:active {
      background-color: hsl(var(--hue), 90%, 95%);
      border-color: hsl(var(--hue), 60%, 80%);
      box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.12),
        inset 0 0 2px rgba(0, 0, 0, 0.12), inset 0 0 4px rgba(0, 0, 0, 0.12),
        inset 0 0 8px rgba(0, 0, 0, 0.12);
    }
  }

  &--removable {
    padding-right: calc(var(--font-size) / 3);
  }
}

.mere-chip__remove {
  background-color: hsl(var(--hue), 70%, 100%);
  border-radius: 50%;
  transition: background-color 0.15s ease-out;
  border: 1px solid hsl(var(--hue), 90%, 75%);
  height: calc(var(--font-size) + 2px);
  width: calc(var(--font-size) + 2px);
  margin-left: calc(var(--font-size) / 2);
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    flex-shrink: 0;
    height: calc(var(--font-size) - 2px);
    width: calc(var(--font-size) - 2px);
    fill: #000;
  }
}
</style>
