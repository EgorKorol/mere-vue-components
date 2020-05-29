import MereControlText from "@/components/ControlText/ControlText.vue";

export default {
  title: "Internal/ControlText",
};

export const sizes = () => ({
  components: { MereControlText },
  template: `
    <div>
			<MereControlText
				class="mb-2"
				id="1"
				size="small"
				help-text="Small helper text"
				error-text="Error text"
				:error="true"
			/>
			<MereControlText
				class="mb-2"
				id="2"
				help-text="Default helper text"
				error-text="Error text"
				:error="true"
			/>
			<MereControlText
				id="3"
				size="large"
				help-text="Large helper text"
				error-text="Error text"
				:error="true"
			/>
    </div>
  `,
});
