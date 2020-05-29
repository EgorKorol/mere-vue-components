<template functional>
  <component
    class="mere-button"
    :is="props.href ? 'a' : props.as"
    :href="props.href && props.href"
    :class="[
      {
        'mere-button--fullwidth': props.fullWidth,
        'mere-button--outlined': props.outlined,
        'mere-button--icon': props.icon,
      },
      props.variant && `mere-variant-${props.variant}`,
      props.size && `mere-size-${props.size}`,
      data.class,
      data.staticClass,
    ]"
    :type="(data.attrs && data.attrs.type && !props.href) || 'button'"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <slot name="start" />
    <slot />
    <slot name="end" />
  </component>
</template>

<script lang="ts">
import Vue from "vue";
import { variant, size } from "@/global/props";

export default Vue.extend({
  name: "MereButton",
  props: {
    ...variant,
    ...size,
    as: {
      type: [String, Vue],
      default: "button",
    },
    href: {
      type: String,
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss">
@use "@/assets/scss/mixins";

.mere-button {
  color: hsl(var(--hue), 15%, 20%);
  background-color: hsl(var(--hue), 70%, 80%);
  min-width: calc(var(--font-size) * 5);
  padding: calc(var(--font-size) / 3) calc(var(--font-size) / 2);
  font-size: calc(var(--font-size) - 1px);
  border-radius: 4px;
  font-family: inherit;
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.15s ease-out;
  border: 2px solid hsl(var(--hue), 80%, 60%);
  line-height: 1.4;
  word-break: break-word;
  text-decoration: none;
  display: inline-block;
  font-weight: 500;

  &[disabled] {
    @include mixins.disabled;
  }

  &:hover {
    border-color: hsl(var(--hue), 100%, 40%);
    color: hsl(var(--hue), 0%, 0%);
    background-color: hsl(var(--hue), 70%, 90%);
  }

  &:focus {
    border-color: hsl(var(--hue), 100%, 40%);
    color: hsl(var(--hue), 0%, 0%);
    outline: none;
  }

  &:active {
    border-color: hsl(var(--hue), 60%, 80%);
    box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.12),
      inset 0 0 2px rgba(0, 0, 0, 0.12), inset 0 0 4px rgba(0, 0, 0, 0.12),
      inset 0 0 8px rgba(0, 0, 0, 0.12);
  }

  &--fullwidth {
    width: 100%;
  }

  &--outlined {
    background-color: transparent;
  }

  &--icon {
    min-width: initial;
    width: calc(var(--font-size) * 2);
    height: calc(var(--font-size) * 2);
    border-radius: 50%;
    background-color: hsl(var(--hue), 70%, 90%);
    padding: calc(var(--font-size) / 2);
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
