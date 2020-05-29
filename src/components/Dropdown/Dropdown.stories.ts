import MereDropdown from "@/components/Dropdown/Dropdown.vue";
import { options } from "@/__mocks__";

export default {
  title: "Public/Dropdown",
};

export const sizes = () => ({
  components: { MereDropdown },
  template: `
    <div>
			<MereDropdown
				class="mb-3"
				label="Label for this dropdown"
				:options="options"
				v-model="dr"
			>
			</MereDropdown>
			<p>
				Dropdown v-model: {{ dr }}
			</p>
    </div>
	`,
  data() {
    return {
      options,
      dr: {
        label: "Nobelium",
        value: "no",
        id: "no",
      },
    };
  },
});
