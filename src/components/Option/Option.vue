<template functional>
  <li
    class="mere-option"
    v-bind="data.attrs"
    v-on="listeners"
    :aria-selected="props.isSelected"
    :class="[data.class, data.staticClass]"
  >
    <slot />
  </li>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "MereOption",
  props: {
    isSelected: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss">
.mere-option {
  cursor: pointer;
  padding: 8px 16px;
  list-style: none;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: background-color 0.15s ease-in;

  &:not(:last-child) {
    border-bottom: 1px solid #000;
  }

  &[aria-selected="true"] {
    background-color: green;
  }

  &:hover {
    background-color: greenyellow;
  }
}
</style>
