import { action } from "@storybook/addon-actions";
import MereRadioGroup from "@/components/RadioGroup/RadioGroup.vue";
import MereRadio from "@/components/Radio/Radio.vue";

export default {
  title: "Public/RadioGroup",
};

const actions = {
  onChange: action("change"),
};

export const variants = () => ({
  components: { MereRadioGroup, MereRadio },
  template: `
    <div>
      <MereRadioGroup
        class="mb-2"
        label="Legend of the group"
        v-model="radioValue"
        @change="onChange"
      >
        <MereRadio
          name="a"
          label="Radio 1"
          value="value 1"
        />
        <MereRadio
          name="a"
          label="Radio 2"
          :value="2"
        />
        <MereRadio
          name="a"
          label="Radio 3"
          :value="true"
        />
        <MereRadio
          name="a"
          label="Radio 4"
          :value="{ a: 'aaa' }"
        />
      </MereRadioGroup>
      RadioGroup v-model: {{ radioValue }}
    </div>
  `,
  methods: actions,
  data() {
    return {
      radioValue: { a: "aaa" },
    };
  },
});
