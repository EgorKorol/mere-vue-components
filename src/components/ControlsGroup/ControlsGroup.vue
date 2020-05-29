<template>
  <fieldset class="mere-controls-group">
    <Label
      class="mere-controls-group__label"
      as="legend"
      :required="required"
      :hidden-label="hiddenLabel"
    >
      {{ label }}
    </Label>
    <div
      class="mere-controls-group__wrapper"
      :aria-describedby="ariaDescribedby"
    >
      <slot />
    </div>
    <ControlText
      class="mere-controls-group__description"
      v-if="helpText || errorText"
      :id="uniqId"
      :help-text="helpText"
      :error-text="errorText"
      :error="invalid"
    />
  </fieldset>
</template>

<script lang="ts">
import Vue from "vue";
import { label, validation } from "@/global/props";
import { getAriaDescribedby } from "@/global/helpers";

export default Vue.extend({
  name: "MereControlsGroup",
  components: {
    Label: () => import("@/components/Label/Label.vue"),
    ControlText: () => import("@/components/ControlText/ControlText.vue"),
  },
  props: {
    ...label,
    ...validation,
    mereValue: {
      type: [Array, Object, String, Number],
    },
  },
  computed: {
    uniqId(): string {
      // @ts-ignore
      return this.$attrs.id || this._uid;
    },
    ariaDescribedby(): string | null {
      return getAriaDescribedby({
        helpText: this.helpText,
        errorText: this.errorText,
        // @ts-ignore
        id: this.uniqId,
      });
    },
  },
  mounted() {
    for (const element of this.$children) {
      element.$on("change", this.callback.bind(null, element));
    }
  },
  beforeDestroy() {
    for (const element of this.$children) {
      element.$off("change", this.callback);
    }
  },
  methods: {
    callback(element: Vue, event: Event): void {
      this.$emit("change", event, element);
    },
  },
});
</script>

<style lang="scss">
@use "@/assets/scss/mixins";

.mere-controls-group {
  border: none;
  padding: 0;
}

.mere-controls-group__label {
  @include mixins.labelGap;
}

.mere-controls-group__wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.mere-controls-group__description {
  padding-left: calc(var(--font-size) / 4);
}
</style>
