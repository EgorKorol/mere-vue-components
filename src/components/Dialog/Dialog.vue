<template>
  <div class="mere-dialog" @click.self="hide">
    <div
      class="mere-dialog__box"
      role="dialog"
      tabindex="-1"
      aria-modal="true"
      ref="dialog"
      :aria-labelledby="title && ariaLabelledby"
      :aria-describedby="$slots.default && ariaDescribedby"
      @keyup.esc="hide"
    >
      <!-- @keydown.shift.tab="prevFocus"
      @keydown.exact.tab="nextFocus" -->
      <div class="mere-dialog__header">
        <h2 v-if="title" class="mere-dialog__title" :id="ariaLabelledby">
          {{ title }}
        </h2>
        <MereButton
          class="mere-dialog__close"
          ref="closeButton"
          @click="hide"
          :icon="true"
          size="small"
        >
          <FontAwesomeIcon icon="times" size="lg" />
        </MereButton>
      </div>
      <div
        class="mere-dialog__body"
        :id="ariaDescribedby"
        v-if="$slots.default"
      >
        <slot />
      </div>
      <div class="mere-dialog__footer" v-if="$slots.footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

interface DialogData {
  focusableElements: NodeListOf<Element> | null;
  currentIndexFocus: number;
}

export default Vue.extend({
  name: "MereDialog",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  components: {
    MereButton: () => import("@/components/Button/Button.vue"),
  },
  data(): DialogData {
    return {
      focusableElements: null,
      currentIndexFocus: 0,
    };
  },
  computed: {
    uniqId(): string {
      // @ts-ignore
      return this.$attrs.id || this._uid;
    },
    ariaLabelledby(): string {
      return `${this.uniqId}__label`;
    },
    ariaDescribedby(): string {
      return `${this.uniqId}__desc`;
    },
  },
  async created() {
    document.body.classList.add("mere-dialog-open");

    await this.$nextTick();

    (this.$refs.dialog as HTMLDivElement).focus();

    await this.$nextTick();

    this.focusableElements = (this.$refs
      .dialog as HTMLDivElement).querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
  },
  beforeDestroy() {
    document.body.classList.remove("mere-dialog-open");
  },
  methods: {
    hide() {
      this.$emit("hide");
    },
    // prevFocus(event: KeyboardEvent) {
    //   console.log("prevFocus");

    //   if (
    //     this.currentIndexFocus === null ||
    //     // @ts-ignore
    //     this.currentIndexFocus >= this.focusableElements.length
    //   ) {
    //     event.preventDefault();
    //   }
    // },
    // nextFocus(): void {
    //   if (
    //     // @ts-ignore
    //     this.currentIndexFocus < this.focusableElements.length
    //   ) {
    //     this.currentIndexFocus = this.currentIndexFocus + 1;
    //   } else {
    //     // @ts-ignore
    //     console.log(this.focusableElements);
    //     // @ts-ignore
    //     // (this.focusableElements[0] as HTMLElement).focus();
    //     // this.currentIndexFocus = 0;
    //   }
    // },
  },
});
</script>

<style lang="scss">
/* this is added to the body when a dialog is open */
.mere-dialog-open {
  overflow: hidden;
}

.mere-dialog {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
}

.mere-dialog__box {
  overflow-y: auto;
  max-height: calc(100% - var(--font-size));
  padding: var(--font-size);
  border-radius: 4px;
  background-color: white;
  min-width: calc(var(--font-size) * 10);
  border-color: hsl(var(--hue), 60%, 80%);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.35), 0 0 2px rgba(0, 0, 0, 0.35),
    0 0 4px rgba(0, 0, 0, 0.35), 0 0 8px rgba(0, 0, 0, 0.35);

  @media screen and (min-width: 640px) {
    max-width: 70vw;
  }
}

.mere-dialog__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  min-height: calc(var(--font-size) * 2);
  margin-bottom: calc(var(--font-size) * 2);
}

.mere-dialog__title {
  font-size: calc(var(--font-size) * 1.5);
  font-weight: 500;
  margin: 0 calc(var(--font-size) * 2) 0 0;
  word-break: break-word;
}

.mere-dialog__body {
  margin-top: var(--font-size);
  margin-bottom: var(--font-size);
}

.mere-dialog__footer {
  margin-top: calc(var(--font-size) * 2);
  display: flex;
  justify-content: flex-end;

  > * {
    &:not(:first-of-type) {
      margin-left: var(--font-size);
    }
  }
}
</style>
