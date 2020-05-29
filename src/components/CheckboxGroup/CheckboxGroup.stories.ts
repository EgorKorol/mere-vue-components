import { action } from "@storybook/addon-actions";
import MereCheckboxGroup from "@/components/CheckboxGroup/CheckboxGroup.vue";
import MereCheckbox from "@/components/Checkbox/Checkbox.vue";

export default {
  title: "Public/CheckboxGroup",
};

const actions = {
  onChange: action("change"),
};

export const variants = () => ({
  components: { MereCheckboxGroup, MereCheckbox },
  template: `
    <div>
      <MereCheckboxGroup
        class="mb-2"
        label="Label of the group"
        help-text="Help text"
        v-model="checkboxValue"
        @change="onChange"
      >
        <MereCheckbox
          label="Checkbox 1"
          value="value 1"
        />
        <MereCheckbox
          label="Checkbox 2"
          :value="2"
        />
        <MereCheckbox
          label="Checkbox 3"
          :value="true"
        />
        <MereCheckbox
          label="Checkbox 4"
          :value="{ a: 'aaa' }"
        />
      </MereCheckboxGroup>
      CheckboxGroup v-model: {{ checkboxValue }}
    </div>
  `,
  methods: actions,
  data() {
    return {
      checkboxValue: [2],
    };
  },
});
