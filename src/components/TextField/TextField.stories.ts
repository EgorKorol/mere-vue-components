import { action } from "@storybook/addon-actions";
import MereTextField from "@/components/TextField/TextField.vue";

export default {
  title: "Public/TextField",
};

const actions = {
  onBlur: action("blur"),
  onChange: action("change"),
  onFocus: action("focus"),
  onInput: action("input"),
};

export const variants = () => ({
  components: { MereTextField },
  template: `
    <div>
      <MereTextField
        class="mb-2"
        label="Label"
        placeholder="Default"
        @blur="onBlur"
        @change="onChange"
        @focus="onFocus"
        @input="onInput"
      />
      <MereTextField
        class="mb-2"
        label="Label"
        variant="secondary"
        placeholder="Secondary"
        @blur="onBlur"
        @change="onChange"
        @focus="onFocus"
        @input="onInput"
      />
      <MereTextField
        class="mb-2"
        label="Label"
        variant="error"
        placeholder="Error"
        error-text="This is error text"
        :invalid="true"
        @blur="onBlur"
        @change="onChange"
        @focus="onFocus"
        @input="onInput"
      />
      <MereTextField
        variant="success"
        label="Label"
        placeholder="Success"
        @blur="onBlur"
        @change="onChange"
        @focus="onFocus"
        @input="onInput"
      />
    </div>
  `,
  methods: actions,
});

export const sizes = () => ({
  components: { MereTextField },
  template: `
    <div>
      <MereTextField
        class="mb-2"
        label="Small size"
        help-text="8 characters - error; 10 characters - success"
        error-text="This field needs to have at least nine characters"
        size="small"
        :valid="input.length >= 10"
        :invalid="input.length < 9"
        :required="true"
        v-model="input"
        @blur="onBlur"
        @change="onChange"
        @focus="onFocus"
        @input="onInput"
      />
      <MereTextField
        class="mb-2"
        label="Default size"
        help-text="8 characters - error; 10 characters - success"
        error-text="This field needs to have at least nine characters"
        :valid="input.length >= 10"
        :invalid="input.length < 9"
        :required="true"
        v-model="input"
        @blur="onBlur"
        @change="onChange"
        @focus="onFocus"
        @input="onInput"
      />
      <MereTextField
        class="mb-2"
        label="Large size"
        help-text="8 characters - error; 10 characters - success"
        error-text="This field needs to have at least nine characters"
        size="large"
        :valid="input.length >= 10"
        :invalid="input.length < 9"
        :required="true"
        v-model="input"
        @blur="onBlur"
        @change="onChange"
        @focus="onFocus"
        @input="onInput"
      />
    </div>
  `,
  methods: actions,
  data() {
    return {
      input: "123456789",
    };
  },
});
