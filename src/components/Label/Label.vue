<template functional>
  <component
    class="mere-label"
    :is="props.as"
    :for="props.labelFor || null"
    :class="[
      { 'visually-hidden': props.hiddenLabel },
      props.size && `mere-size-${props.size}`,
      data.class,
      data.staticClass,
    ]"
  >
    <slot />
    <template v-if="props.required">
      <span class="mere-label__star" aria-hidden="true">
        *
      </span>
      <span class="visually-hidden">required</span>
    </template>
  </component>
</template>

<script lang="ts">
import Vue from "vue";
import { size } from "@/global/props";

export default Vue.extend({
  name: "MereLabel",
  props: {
    ...size,
    as: {
      type: [String, Vue],
      default: "label",
    },
    required: {
      type: Boolean,
      default: false,
    },
    hiddenLabel: {
      type: Boolean,
      default: false,
    },
    labelFor: {
      type: [String, Number],
    },
  },
});
</script>

<style lang="scss">
.mere-label {
  font-size: var(--font-size);
  user-select: none;
  display: inline-block;
  color: hsl(var(--hue-default), 20%, 30%);
}

.mere-label__star {
  color: hsl(var(--hue-error), 90%, 50%);
}
</style>
