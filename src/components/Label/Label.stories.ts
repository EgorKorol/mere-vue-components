import MereLabel from "@/components/Label/Label.vue";

export default {
  title: "Public/Label",
};

export const sizes = () => ({
  components: { MereLabel },
  template: `
    <div>
			<MereLabel
				class="mr-2"
				size="small"
				:required="true"
			>
				Small required
			</MereLabel>
			<MereLabel
				class="mr-2"
				:required="true"
			>
				Default required
			</MereLabel>
			<MereLabel
				size="large"
				:required="true"
			>
				Large required
			</MereLabel>
    </div>
  `,
});
