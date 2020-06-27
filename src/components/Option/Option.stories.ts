import MereOption from "@/components/Option/Option.vue";

export default {
  title: "Internal/Option",
};

export const sizes = () => ({
  components: { MereOption },
  template: `
    <div>
			<MereOption
				role='option'
				id="1"
        title="Title"
        :is-selected="false"
			>
				Option
			</MereOption>
			<MereOption
				role='option'
				id="2"
        title="Title"
        :is-selected="true"
			>
				Option selected
			</MereOption>
    </div>
	`,
});
