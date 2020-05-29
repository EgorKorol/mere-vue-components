import { action } from "@storybook/addon-actions";
import MereInput from "@/components/Input/Input.vue";

export default {
  title: "Public/Input",
};

const actions = {
  onBlur: action("blur"),
  onChange: action("change"),
  onFocus: action("focus"),
  onInput: action("input"),
};

export const variants = () => ({
  components: { MereInput },
  template: `
    <div>
      <MereInput
        class="mb-2"
        placeholder="Default filled"
        @blur="onBlur"
        @change="onChange"
        @focus="onFocus"
        @input="onInput"
      />
      <MereInput
        class="mb-2"
        variant="secondary"
        placeholder="Secondary filled"
        @blur="onBlur"
        @change="onChange"
        @focus="onFocus"
        @input="onInput"
      />
      <MereInput
        class="mb-2"
        variant="error"
        placeholder="Error filled"
        @blur="onBlur"
        @change="onChange"
        @focus="onFocus"
        @input="onInput"
      />
      <MereInput
        class="mb-5"
        variant="success"
        placeholder="Success filled"
        @blur="onBlur"
        @change="onChange"
        @focus="onFocus"
        @input="onInput"
      />
      <MereInput
        class="mb-2"
        placeholder="Default outlined"
        :outlined="true"
        @blur="onBlur"
        @change="onChange"
        @focus="onFocus"
        @input="onInput"
      />
      <MereInput
        class="mb-2"
        variant="secondary"
        placeholder="Secondary outlined"
        :outlined="true"
        @blur="onBlur"
        @change="onChange"
        @focus="onFocus"
        @input="onInput"
      />
      <MereInput
        class="mb-2"
        variant="error"
        placeholder="Error outlined"
        :outlined="true"
        @blur="onBlur"
        @change="onChange"
        @focus="onFocus"
        @input="onInput"
      />
      <MereInput
        variant="success"
        placeholder="Success outlined"
        :outlined="true"
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
  components: { MereInput },
  template: `
    <div>
      <MereInput
        class="mb-2"
        size="small"
        placeholder="Small filled"
        @blur="onBlur"
        @change="onChange"
        @focus="onFocus"
        @input="onInput"
      />
      <MereInput
        class="mb-2" 
        placeholder="Default filled"
        @blur="onBlur"
        @change="onChange"
        @focus="onFocus"
        @input="onInput"
      />
      <MereInput
        class="mb-5" 
        size="large"
        placeholder="Large filled"
        @blur="onBlur"
        @change="onChange"
        @focus="onFocus"
        @input="onInput"
      />
      <MereInput
        class="mb-2"
        size="small"
        placeholder="Small outlined"
        :outlined="true"
        @blur="onBlur"
        @change="onChange"
        @focus="onFocus"
        @input="onInput"
      />
      <MereInput
        class="mb-2" 
        placeholder="Default outlined"
        :outlined="true"
        @blur="onBlur"
        @change="onChange"
        @focus="onFocus"
        @input="onInput"
      />
      <MereInput
        size="large"
        placeholder="Large outlined"
        :outlined="true"
        @blur="onBlur"
        @change="onChange"
        @focus="onFocus"
        @input="onInput"
      />
    </div>
  `,
  methods: actions,
});
