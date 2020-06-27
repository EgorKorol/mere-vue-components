<template>
  <label
    class="mere-checkbox"
    :class="[
      { 'mere-checkbox--disabled': $attrs.disabled },
      variant && `mere-variant-${variant}`,
      size && `mere-size-${size}`,
    ]"
  >
    <input
      class="mere-checkbox__input"
      type="checkbox"
      :checked="checked"
      :required="required"
      v-bind="$attrs"
      @change="onChange"
    />
    <Label
      as="span"
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
import { isArrayAndNotEmpty } from "@/global/helpers";

export default Vue.extend({
  name: "MereCheckbox",
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
      // @ts-ignore
      const parentMereValue = this.$parent.mereValue;

      if (isArrayAndNotEmpty(parentMereValue)) {
        return typeof this.value === "object"
          ? Boolean(
              parentMereValue.find(
                (item: unknown) =>
                  JSON.stringify(item) === JSON.stringify(this.value)
              )
            )
          : parentMereValue.includes(this.value);
      }

      const isObject =
        typeof this.mereValue === "object" || typeof this.value === "object";

      if (isObject) {
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

.mere-checkbox {
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

    .mere-checkbox__input {
      background-color: hsl(var(--hue), 100%, 100%);
    }
  }

  &--disabled {
    @include mixins.disabled;
  }
}

.mere-checkbox__input {
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
  border: 2px solid hsl(var(--hue), 60%, 55%);
  border-radius: 3px;
  transition: background-color 0.15s ease-in;
  margin-right: calc(var(--font-size) / 2);

  &:checked {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgb(33, 26, 18)' viewBox='0 0 492 492'%3E%3Cpath d='M484.128 104.478l-16.116-16.116c-5.064-5.068-11.816-7.856-19.024-7.856s-13.964 2.788-19.028 7.856L203.508 314.81 62.024 173.322c-5.064-5.06-11.82-7.852-19.028-7.852-7.204 0-13.956 2.792-19.024 7.852l-16.12 16.112C2.784 194.51 0 201.27 0 208.47c0 7.204 2.784 13.96 7.852 19.028l159.744 159.736c.212.3.436.58.696.836l16.12 15.852c5.064 5.048 11.82 7.572 19.084 7.572h.084c7.212 0 13.968-2.524 19.024-7.572l16.124-15.992c.26-.256.48-.468.612-.684l244.784-244.76c10.5-10.476 10.5-27.52.004-38.008z'/%3E%3C/svg%3E");
    background-position: center;
    background-size: 80%;
    background-repeat: no-repeat;
  }
}
</style>
