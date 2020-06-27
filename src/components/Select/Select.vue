<template>
  <div class="mere-select">
    <Label
      class="mere-select__label"
      :label-for="inputUniqId"
      :id="labelUniqId"
      :hidden-label="hiddenLabel"
      :size="size"
    >
      {{ label }}
    </Label>
    <Input
      aria-haspopup="listbox"
      class="mere-select__input"
      :readonly="true"
      :id="inputUniqId"
      :aria-labelledby="`${labelUniqId} ${inputUniqId}`"
      :aria-expanded="isListboxVisible"
      :mere-value="mereValue.label"
      :variant="computedVariant"
      :aria-invalid="invalid"
      :aria-describedby="ariaDescribedby"
      :size="size"
      @click="showListbox"
      @keydown.prevent.space="showListbox"
      @keydown.prevent.enter="showListbox"
      @keyup.prevent.down="showListbox"
      @keyup.prevent.up="showListbox"
      ref="input"
    />
    <ControlText
      v-if="helpText || errorText"
      :size="size"
      :id="uniqId"
      :help-text="helpText"
      :error-text="errorText"
      :error="invalid"
    />
    <Listbox
      role="listbox"
      ref="listbox"
      v-show="isListboxVisible"
      :size="size"
      :aria-labelledby="labelUniqId"
      :aria-activedescendant="mereValue.id"
      :options="options"
      :selected-item="mereValue"
      @hide="hideListbox"
      @select="selectItem"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Option } from "@/components/Option/types";
import { variant, size, label, validation, options } from "@/global/props";
import { mereModel } from "@/global/mixins";
import { getAriaDescribedby, getComputedVariant } from "@/global/helpers";

interface SelectData {
  isListboxVisible: boolean;
}

export default Vue.extend({
  name: "MereSelect",
  model: mereModel,
  components: {
    Label: () => import("@/components/Label/Label.vue"),
    Input: () => import("@/components/Input/Input.vue"),
    Listbox: () => import("@/components/Listbox/Listbox.vue"),
  },
  props: {
    ...variant,
    ...size,
    ...label,
    ...validation,
    ...options,
    mereValue: {
      type: [String, Number, Boolean, Object],
    },
    value: {
      type: [String, Number],
    },
  },
  data(): SelectData {
    return {
      isListboxVisible: false,
    };
  },
  created() {
    if (!this.mereValue) {
      this.$emit("mereEmit", this.options[0]);
    }
  },
  computed: {
    uniqId(): string {
      // @ts-ignore
      return this.$attrs.id || this._uid;
    },
    inputUniqId(): string {
      return `${this.uniqId}_button`;
    },
    labelUniqId(): string {
      return `${this.uniqId}_elem`;
    },
    ariaDescribedby(): string | null {
      return getAriaDescribedby({
        helpText: this.helpText,
        errorText: this.errorText,
        // @ts-ignore
        id: this.uniqId,
      });
    },
    computedVariant(): string | null {
      return getComputedVariant({
        invalid: this.invalid,
        valid: this.valid,
        variant: this.variant,
      });
    },
  },
  methods: {
    async showListbox(): Promise<void> {
      this.isListboxVisible = true;

      await this.$nextTick();

      ((this.$refs.listbox as Vue).$el as HTMLElement).focus();
    },
    hideListbox(): void {
      this.isListboxVisible = false;

      ((this.$refs.input as Vue).$el.firstElementChild as HTMLElement).focus();
    },
    selectItem(item: Option): void {
      this.$emit("mereEmit", item);
      this.$emit("change", item);
    },
  },
});
</script>

<style lang="scss">
@use "@/assets/scss/mixins";

.mere-select {
  position: relative;
  display: inline-flex;
  flex-direction: column;
}

.mere-select__label {
  @include mixins.labelGap;
}

.mere-select__input {
  &::after {
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid #aaa;
    content: "";
    position: absolute;
    right: 5px;
    top: 10px;
  }

  &[aria-expanded="true"] {
    &::after {
      transform: rotate(180deg);
    }
  }
}
</style>
