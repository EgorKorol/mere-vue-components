import { action } from "@storybook/addon-actions";
import MereSwitch from "@/components/Switch/Switch.vue";

export default {
  title: "Public/Switch",
};

const actions = {
  onChange: action("change"),
};

export const variants = () => ({
  components: { MereSwitch },
  template: `
    <div class="ta-center">
      <div>
        <MereSwitch
          class="mr-2"
          label="Default"
          @change="onChange"
        />
        <MereSwitch
          class="mr-2"
          variant="secondary"
          label="Secondary"
          @change="onChange"
        />
        <MereSwitch
          class="mr-2"
          variant="error"
          label="Error"
          @change="onChange"
        />
        <MereSwitch
          variant="success"
          label="Success"
          @change="onChange"
        />
      </div>
      <div>
        <MereSwitch
          class="mr-2"
          label="Default"
          @change="onChange"
        />
        <MereSwitch
          class="mr-2"
          label="Checked"
          v-model="checkboxChecked"
          @change="onChange"
        />
        <MereSwitch
          class="mr-2"
          label="Disabled"
          :disabled="true"
          @change="onChange"
        />
        <MereSwitch
          class="mr-2"
          label="Checked disabled"
          :disabled="true"
          v-model="checkboxChecked"
          @change="onChange"
        />
      </div>
      <div>
        <MereSwitch
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
      checkboxChecked: true,
    };
  },
});

export const sizes = () => ({
  components: { MereSwitch },
  template: `
    <div class="ta-center">
      <MereSwitch
        size="small"
        class="mr-2"
        label="Small"
        @change="onChange"
      />
      <MereSwitch
        class="mr-2"
        label="Default"
        @change="onChange"
      />
      <MereSwitch
        size="large"
        label="Large"
        @change="onChange"
      />
    </div>
  `,
  methods: actions,
});
