import { action } from "@storybook/addon-actions";
import MereCheckbox from "@/components/Checkbox/Checkbox.vue";

export default {
  title: "Public/Checkbox",
};

const actions = {
  onChange: action("change"),
};

export const variants = () => ({
  components: { MereCheckbox },
  template: `
    <div>
      <MereCheckbox
        class="mr-2"
        label="Default"
        @change="onChange"
      />
      <MereCheckbox
        class="mr-2"
        variant="secondary"
        label="Secondary"
        @change="onChange"
      />
      <MereCheckbox
        class="mr-2"
        variant="error"
        label="Error"
        @change="onChange"
      />
      <MereCheckbox
        variant="success"
        label="Success"
        @change="onChange"
      />
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
  components: { MereCheckbox },
  template: `
    <div>
      <MereCheckbox
        size="small"
        class="mr-2"
        label="Small"
        @change="onChange"
      />
      <MereCheckbox
        class="mr-2"
        label="Default"
        @change="onChange"
      />
      <MereCheckbox
        size="large"
        label="Large"
        @change="onChange"
      />
    </div>
  `,
  methods: actions,
});

export const required = () => ({
  components: { MereCheckbox },
  template: `
    <form @submit.prevent="">
      <MereCheckbox
        label="Required"
        :required="true"
        v-model="required"
        @change="onChange"
      />
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  `,
  data() {
    return {
      required: false,
    };
  },
  methods: {
    ...actions,
  },
});
