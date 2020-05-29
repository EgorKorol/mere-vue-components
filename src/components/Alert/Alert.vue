<template functional>
  <p
    role="status"
    aria-live="polite"
    class="mere-alert"
    :class="[
      props.variant && `mere-variant-${props.variant}`,
      props.size && `mere-size-${props.size}`,
      data.class,
      data.staticClass,
    ]"
  >
    <strong class="visually-hidden">
      {{ props.variant === "secondary" ? "warning" : props.variant || "info" }}
    </strong>
    <slot />
  </p>
</template>

<script lang="ts">
import Vue from "vue";
import { variant, size } from "@/global/props";

export default Vue.extend({
  name: "MereAlert",
  props: {
    ...variant,
    ...size,
  },
});
</script>

<style lang="scss">
.mere-alert {
  color: hsl(var(--hue), 45%, 30%);
  background-color: hsl(var(--hue), 60%, 94%);
  padding: calc(var(--font-size) / 1.5) var(--font-size);
  margin-bottom: calc(var(--font-size) / 2);
  margin-top: calc(var(--font-size) / 2);
  border-radius: 4px;
  font-size: calc(var(--font-size) - 1px);
  text-align: center;
  line-height: 1.4;
  word-break: break-word;
}
</style>
