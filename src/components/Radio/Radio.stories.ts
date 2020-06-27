import { action } from "@storybook/addon-actions";
import MereRadio from "@/components/Radio/Radio.vue";

export default {
  title: "Public/Radio",
};

const actions = {
  onChange: action("change"),
};

export const variants = () => ({
  components: { MereRadio },
  template: `
    <div class="ta-center">
      <div>
        <MereRadio
          class="mr-2"
          name="var"
          label="Default"
          @change="onChange"
        />
        <MereRadio
          class="mr-2"
          name="var"
          variant="secondary"
          label="Secondary"
          @change="onChange"
        />
        <MereRadio
          class="mr-2"
          name="var"
          variant="error"
          label="Error"
          @change="onChange"
        />
        <MereRadio
          variant="success"
          name="var"
          label="Success"
          @change="onChange"
        />
      </div>
      <div>
        <MereRadio
          class="mr-2"
          name="state1"
          label="Default"
          @change="onChange"
        />
        <MereRadio
          class="mr-2"
          name="state1"
          label="Checked"
          v-model="radioChecked"
          @change="onChange"
        />
        <MereRadio
          class="mr-2"
          name="state3"
          label="Disabled"
          :disabled="true"
          @change="onChange"
        />
        <MereRadio
          class="mr-2"
          name="state3"
          label="Checked disabled"
          :disabled="true"
          v-model="radioChecked"
          @change="onChange"
        />
      </div>
      <div>
        <MereRadio
          name="state8"
          label="Required"
          :required="true"
          @change="onChange"
        />
      </div>
    </div>
  `,
  methods: actions,
  data() {
    return {
      radioChecked: true,
    };
  },
});

export const sizes = () => ({
  components: { MereRadio },
  template: `
    <div class="ta-center">
      <MereRadio
        class="mr-2"
        size="small"
        name="size"
        label="Small"
        @change="onChange"
      />
      <MereRadio
        class="mr-2"
        name="size"
        label="Default"
        @change="onChange"
      />
      <MereRadio
        size="large"
        name="size"
        label="Large"
        @change="onChange"
      />
    </div>
  `,
  methods: actions,
});
