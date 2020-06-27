import MereSelect from "@/components/Select/Select.vue";
import { options } from "@/__mocks__";

export default {
  title: "Public/Select",
};

export const sizes = () => ({
  components: { MereSelect },
  template: `
    <div>
			<MereSelect
				class="mb-3"
				label="Label for this select"
				:options="options"
				v-model="dr"
			>
			</MereSelect>
			<p>
				Select v-model: {{ dr }}
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
