import MereAlert from "@/components/Alert/Alert.vue";

export default {
  title: "Public/Alert",
};

export const variants = () => ({
  components: { MereAlert },
  template: `
    <div>
      <MereAlert>
        Default
      </MereAlert>
      <MereAlert variant="secondary">
        Warning
      </MereAlert>
      <MereAlert variant="error">
        Error
      </MereAlert>
      <MereAlert variant="success">
        Success
      </MereAlert>
    </div>
  `,
});

export const sizes = () => ({
  components: { MereAlert },
  template: `
    <div>
      <MereAlert size="small">
        Small
      </MereAlert>
      <MereAlert>
        Default
      </MereAlert>
      <MereAlert size="large">
        Large
      </MereAlert>
    </div>
  `,
});
