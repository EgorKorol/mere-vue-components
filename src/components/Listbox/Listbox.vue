<template>
  <ul
    class="mere-listbox"
    tabindex="-1"
    @blur="hideListbox"
    @keydown="checkKeyPress"
    @focus="setScroll"
  >
    <Option
      role="option"
      v-for="item in options"
      :key="item.id"
      :id="item.id"
      :title="item.label"
      :is-selected="selectedItem.id === item.id"
      @click="selectItem(item)"
    >
      {{ item.label }}
    </Option>
  </ul>
</template>

<script lang="ts">
import Vue from "vue";
import { KeyCodes } from "@/global/constants";
import { Option } from "@/components/Option/types";
import { size, options } from "@/global/props";

interface ListboxData {
  searchTerm: string | null;
  searchTermTimeout: number | null;
}

export default Vue.extend({
  name: "MereListbox",
  components: {
    Option: () => import("@/components/Option/Option.vue"),
  },
  props: {
    ...size,
    ...options,
    selectedItem: {
      type: [String, Number, Boolean, Object],
    },
  },
  data(): ListboxData {
    return {
      searchTerm: null,
      searchTermTimeout: null,
    };
  },
  watch: {
    searchTerm(
      newValue: ListboxData["searchTerm"],
      oldValue: ListboxData["searchTerm"]
    ): void {
      if (this.searchTermTimeout) {
        // @ts-ignore
        clearTimeout(this.searchTermTimeout);
        this.searchTermTimeout = null;
      }

      if (newValue && newValue !== oldValue && !this.searchTermTimeout) {
        this.searchTermTimeout = setTimeout(() => {
          this.searchTerm = null;
          this.searchTermTimeout = null;
        }, 700);
      }
    },
  },
  computed: {
    currentIndex(): number {
      return this.options.findIndex(
        // @ts-ignore
        ({ id }) => id === this.selectedItem.id
      );
    },
  },
  methods: {
    async checkKeyPress(event: KeyboardEvent): Promise<void> {
      switch (event.key) {
        case KeyCodes.Up:
          event.preventDefault();

          if (this.currentIndex > 0) {
            // @ts-ignore
            this.selectItem(this.options[this.currentIndex - 1]);
          }

          break;
        case KeyCodes.Down:
          event.preventDefault();

          if (this.currentIndex < this.options.length - 1) {
            // @ts-ignore
            this.selectItem(this.options[this.currentIndex + 1]);
          }

          break;
        case KeyCodes.Home:
          event.preventDefault();
          // @ts-ignore
          this.selectItem(this.options[0]);
          break;
        case KeyCodes.End:
          event.preventDefault();
          // @ts-ignore
          this.selectItem(this.options[this.options.length - 1]);
          break;
        case KeyCodes.Escape:
        case KeyCodes.Enter:
          event.preventDefault();
          this.hideListbox();
          break;
        default:
          // eslint-disable-next-line no-case-declarations
          const itemToFocus = this.findItemToFocus(event);

          if (itemToFocus) {
            this.selectItem(itemToFocus);
          }

          break;
      }

      await this.$nextTick();

      this.setScroll();
    },
    selectItem(item: Option): void {
      this.$emit("select", item);
    },
    setScroll(): void {
      const element = document.getElementById(this.selectedItem.id);

      if (element) {
        element.scrollIntoView({ block: "center", behavior: "smooth" });
      }
    },
    findItemToFocus(event: KeyboardEvent): Option | null {
      if (event.key.length < 2) {
        this.searchTerm = (this.searchTerm || "") + event.key.toLowerCase();
      }
      // @ts-ignore
      return this.findMatchInRange(this.searchTerm);
    },
    hideListbox(): void {
      this.$emit("hide");
    },
    findMatchInRange(searchTerm: string): Option | null {
      for (const item of this.options) {
        // @ts-ignore
        const label = item.label.toLowerCase();

        if (label.startsWith(searchTerm)) {
          // @ts-ignore
          return item;
        }
      }

      return null;
    },
  },
});
</script>

<style lang="scss">
.mere-listbox {
  padding-left: 0;
  overflow-y: auto;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  margin: 0;
  width: 100%;
  min-width: 200px;
  max-height: 300px;
  border: 1px solid #000;
}
</style>
