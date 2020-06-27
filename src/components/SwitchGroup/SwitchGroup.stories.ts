import { action } from "@storybook/addon-actions";
import MereSwitchGroup from "@/components/SwitchGroup/SwitchGroup.vue";
import MereSwitch from "@/components/Switch/Switch.vue";

export default {
  title: "Public/SwitchGroup",
};

const actions = {
  onChange: action("change"),
};

export const variants = () => ({
  components: { MereSwitchGroup, MereSwitch },
  template: `
    <div>
      <MereSwitchGroup
        class="mb-2"
        label="Label of the group"
        help-text="Help text"
        v-model="checkboxValue"
        @change="onChange"
      >
        <MereSwitch
          label="Switch 1"
          value="value 1"
        />
        <MereSwitch
          label="Switch 2"
          :value="2"
        />
        <MereSwitch
          label="Switch 3"
          :value="true"
        />
        <MereSwitch
          label="Switch 4"
          :value="{ a: 'aaa' }"
        />
      </MereSwitchGroup>
      SwitchGroup v-model: {{ checkboxValue }}
    </div>
  `,
  methods: actions,
  data() {
    return {
      checkboxValue: [2],
    };
  },
});
