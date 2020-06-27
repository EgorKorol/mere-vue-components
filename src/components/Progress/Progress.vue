<template functional>
  <div
    class="mere-progress"
    role="progressbar"
    aria-valuemin="0"
    :aria-valuenow="props.value"
    :aria-valuemax="props.max"
    :class="[
      props.variant && `mere-variant-${props.variant}`,
      props.size && `mere-size-${props.size}`,
      data.class,
      data.staticClass,
    ]"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <div
      class="mere-progress__inner"
      :style="{
        transform: `translateX(-${
          Math.round(props.max) - Math.round(Math.abs(props.value))
        }%)`,
      }"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { variant, size } from "@/global/props";

export default Vue.extend({
  name: "MereProgress",
  props: {
    ...variant,
    ...size,
    max: {
      type: Number,
      default: 100,
    },
    value: {
      type: Number,
      default: 0,
    },
  },
});
</script>

<style lang="scss">
.mere-progress {
  background-color: hsl(var(--hue), 0%, 90%);
  min-width: 100px;
  position: relative;
  overflow: hidden;
  height: calc(var(--font-size) / 2);
}

.mere-progress__inner {
  transition: transform 0.15s ease-in;
  background-color: hsl(var(--hue), 70%, 75%);
  transform-origin: left;
  width: 100%;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
}
</style>
