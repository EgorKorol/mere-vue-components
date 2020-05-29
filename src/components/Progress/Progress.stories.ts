import MereProgress from "@/components/Progress/Progress.vue";

export default {
  title: "Public/Progress",
};

export const variants = () => ({
  components: { MereProgress },
  template: `
    <div>
      <MereProgress
        class="mb-4"
        :value="20"
      />
      <MereProgress
        class="mb-4"
        variant="secondary"
        :value="40"
      />
      <MereProgress
        class="mb-4"
        variant="error"
        :value="60"
      />
      <MereProgress
        variant="success"
        :value="-80"
      />
    </div>
  `,
});

export const sizes = () => ({
  components: { MereProgress },
  template: `
    <div>
      <MereProgress
        class="mb-4"
        size="small"
        :value="20"
      />
      <MereProgress
        class="mb-4"
        :value="20"
      />
      <MereProgress
        size="large"
        :value="20"
      />
    </div>
  `,
});
