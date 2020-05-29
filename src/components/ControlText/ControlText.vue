<template functional>
  <div
    class="mere-control-text"
    :class="[
      props.size && `mere-size-${props.size}`,
      data.class,
      data.staticClass,
    ]"
  >
    <p
      class="mere-control-text__description"
      v-if="props.helpText"
      :id="`desc-${props.id}`"
    >
      {{ props.helpText }}
    </p>
    <p
      class="mere-control-text__description mere-control-text__description--error"
      v-if="props.errorText && props.error"
      :id="`error-${props.id}`"
    >
      {{ props.errorText }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { size } from "@/global/props";

export default Vue.extend({
  name: "MereControlText",
  props: {
    ...size,
    id: {
      type: [String, Number],
    },
    errorText: {
      type: String,
    },
    helpText: {
      type: String,
    },
    error: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss">
.mere-control-text {
  margin-top: calc(var(--font-size) / 3);
}

.mere-control-text__description {
  margin: calc(var(--font-size) / 4) 0;
  font-size: calc(var(--font-size) - 3px);
  color: hsl(var(--hue-default), 20%, 30%);
  word-break: break-word;

  &--error {
    color: hsl(var(--hue-error), 90%, 50%);
  }
}
</style>
