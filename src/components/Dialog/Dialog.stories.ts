import MereButton from "@/components/Button/Button.vue";
import MereDialog from "@/components/Dialog/Dialog.vue";

export default {
  title: "Public/Dialog",
};

export const variants = () => ({
  components: { MereDialog, MereButton },
  template: `
    <div>
      <MereDialog v-if="isShowDialog" title="Dialog title" @hide="isShowDialog = false">
        Body textBody textBody textBody textBody textBody textBody textBody textBody textBody textBody textBody textBody textBody textBody textBody textBody textBody textBody textBody text
        <template v-slot:footer>
          <MereButton>
            Action
          </MereButton>
          <MereButton :outlined="true" @click="isShowDialog = false">
            Cancel
          </MereButton>
        </template>
      </MereDialog>
      <MereButton @click="isShowDialog = true">
        Open dialog
      </MereButton>
    </div>
  `,
  data() {
    return {
      isShowDialog: false,
    };
  },
});
