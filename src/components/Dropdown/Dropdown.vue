<template>
  <div class="mere-dropdown">
    <Label
      class="mere-dropdown__label"
      as="span"
      :id="labelUniqId"
      :hidden-label="hiddenLabel"
      :size="size"
    >
      {{ label }}
    </Label>
    <button
      aria-haspopup="listbox"
      class="mere-dropdown__button"
      :id="buttonUniqId"
      :aria-labelledby="`${labelUniqId} ${buttonUniqId}`"
      :aria-expanded="isListboxVisible"
      @click="showListbox"
      @keyup.prevent.down="showListbox"
      @keyup.prevent.up="showListbox"
      ref="button"
    >
      {{ mereValue.label }}
    </button>
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
import { size, label, options } from "@/global/props";
import { mereModel } from "@/global/mixins";

interface DropdownData {
  isListboxVisible: boolean;
}

export default Vue.extend({
  name: "MereDropdown",
  model: mereModel,
  components: {
    Label: () => import("@/components/Label/Label.vue"),
    Listbox: () => import("@/components/Listbox/Listbox.vue"),
  },
  props: {
    ...size,
    ...label,
    ...options,
    mereValue: {
      type: [String, Number, Boolean, Object],
    },
  },
  data(): DropdownData {
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
    buttonUniqId(): string {
      return `${this.uniqId}_button`;
    },
    labelUniqId(): string {
      return `${this.uniqId}_elem`;
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

      (this.$refs.button as HTMLElement).focus();
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

.mere-dropdown {
  position: relative;
  display: inline-flex;
  flex-direction: column;
}

.mere-dropdown__label {
  @include mixins.labelGap;
}

.mere-dropdown__button {
  color: hsl(var(--hue), 15%, 20%);
  min-width: calc(var(--font-size) * 6);
  padding: calc(var(--font-size) / 4);
  font-size: var(--font-size);
  border-radius: 4px;
  font-family: inherit;
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  transition: background-color 0.15s ease-out;
  // border: 2px solid hsl(var(--hue), 80%, 60%);
  line-height: 1.4;
  word-break: break-word;
  position: relative;
  text-align: left;

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
