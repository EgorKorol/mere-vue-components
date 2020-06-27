import { action } from "@storybook/addon-actions";
import MereButton from "@/components/Button/Button.vue";

export default {
  title: "Public/Button",
};

const actions = {
  onClick: action("click"),
};

export const variants = () => ({
  components: { MereButton },
  template: `
    <div>
      <div class="mb-3">
        <MereButton
          class="mr-5"
          type="submit"
          @click="onClick"
        >
          Default filled
        </MereButton>
        <MereButton
          class="mr-5"
          variant="secondary"
          @click="onClick"
        >
          Secondary filled
        </MereButton>
        <MereButton
          class="mr-5"
          variant="error"
          @click="onClick"
        >
          Error filled
        </MereButton>
        <MereButton
          variant="success"
          @click="onClick"
        >
          Success filled
        </MereButton>
      </div>
      <div class="mb-3">
        <MereButton
          class="mr-5"
          :outlined="true"
          @click="onClick"
        >
          Default outlined
        </MereButton>
        <MereButton
          class="mr-5"
          variant="secondary"
          :outlined="true"
          @click="onClick"
        >
          Secondary outlined
        </MereButton>
        <MereButton
          class="mr-5"
          variant="error"
          :outlined="true"
          @click="onClick"
        >
          Error outlined
        </MereButton>
        <MereButton
          variant="success"
          :outlined="true"
          @click="onClick"
        >
          Success outlined
        </MereButton>
      </div>
      <div class="mb-3">
        <MereButton
          class="mr-3"
          :icon="true"
          @click="onClick"
        >
          <FontAwesomeIcon icon="user-secret" />
        </MereButton>
        <MereButton
          variant="secondary"
          class="mr-3"
          :icon="true"
          @click="onClick"
        >
          <FontAwesomeIcon icon="user-secret" />
        </MereButton>
        <MereButton
          variant="error"
          class="mr-3"
          :icon="true"
          @click="onClick"
        >
          <FontAwesomeIcon icon="user-secret" />
        </MereButton>
        <MereButton
          variant="success"
          :icon="true"
          @click="onClick"
        >
          <FontAwesomeIcon icon="user-secret" />
        </MereButton>
      </div>
      <div>
        <MereButton
          class="mb-2"
          :full-width="true"
          @click="onClick"
        >
          Full width filled
        </MereButton>
        <MereButton
          :full-width="true"
          :outlined="true"
          @click="onClick"
        >
          Full width outlined
        </MereButton>
      </div>
    </div>
  `,
  methods: actions,
});

export const types = () => ({
  components: { MereButton },
  template: `
    <div class="mb-3">
      <MereButton
        class="mr-5"
        type="button"
        @click="onClick"
      >
        type="button"
      </MereButton>
      <MereButton
        class="mr-5"
        variant="secondary"
        type="reset"
        @click="onClick"
      >
        type="reset"
      </MereButton>
      <MereButton
        class="mr-5"
        variant="error"
        type="submit"
        @click="onClick"
      >
        type="submit"
      </MereButton>
      <MereButton
        variant="success"
        href="#"
        @click="onClick"
      >
        href="#"
      </MereButton>
    </div>
  `,
  methods: actions,
});

export const disabled = () => ({
  components: { MereButton },
  template: `
    <div>
      <div class="mb-3">
        <MereButton
          class="mr-5"
          :disabled="true"
          @click="onClick"
        >
          Default filled disabled
        </MereButton>
        <MereButton
          class="mr-5"
          variant="secondary"
          :disabled="true"
          @click="onClick"
        >
          Secondary filled disabled
        </MereButton>
        <MereButton
          class="mr-5"
          variant="error"
          :disabled="true"
          @click="onClick"
        >
          Error filled disabled
        </MereButton>
        <MereButton
          variant="success"
          :disabled="true"
          @click="onClick"
        >
          Success filled disabled
        </MereButton>
      </div> 
      <div class="mb-3">
        <MereButton
          class="mr-5"
          :outlined="true"
          :disabled="true"
          @click="onClick"
        >
          Default outlined disabled
        </MereButton>
        <MereButton
          class="mr-5"
          variant="secondary"
          :outlined="true"
          :disabled="true"
          @click="onClick"
        >
          Secondary outlined disabled
        </MereButton>
        <MereButton
          class="mr-5"
          variant="error"
          :outlined="true"
          :disabled="true"
          @click="onClick"
        >
          Error outlined disabled
        </MereButton>
        <MereButton
          variant="success"
          :outlined="true"
          :disabled="true"
          @click="onClick"
        >
          Success outlined disabled
        </MereButton>
      </div>
      <div class="mb-3">
        <MereButton
          class="mr-3"
          :icon="true"
          :disabled="true"
          @click="onClick"
        >
          <FontAwesomeIcon icon="user-secret" />
        </MereButton>
        <MereButton
          variant="secondary"
          class="mr-3"
          :icon="true"
          :disabled="true"
          @click="onClick"
        >
          <FontAwesomeIcon icon="user-secret" />
        </MereButton>
        <MereButton
          variant="error"
          class="mr-3"
          :icon="true"
          :disabled="true"
          @click="onClick"
        >
          <FontAwesomeIcon icon="user-secret" />
        </MereButton>
        <MereButton
          variant="success"
          :icon="true"
          :disabled="true"
          @click="onClick"
        >
          <FontAwesomeIcon icon="user-secret" />
        </MereButton>
      </div>
      <div>
        <MereButton
          class="mb-2"
          :full-width="true"
          :disabled="true"
          @click="onClick"
        >
          Full width filled disabled
        </MereButton>
        <MereButton
          :full-width="true"
          :outlined="true"
          :disabled="true"
          @click="onClick"
        >
          Full width outlined disabled
        </MereButton>
      </div>
    </div>
  `,
  methods: actions,
});

export const sizes = () => ({
  components: { MereButton },
  template: `
    <div>
      <div class="mb-3">
        <MereButton
          class="mr-5"
          size="small"
          @click="onClick"
        >
          Small filled
        </MereButton>
        <MereButton
          class="mr-5"
          @click="onClick"
        >
          Default filled
        </MereButton>
        <MereButton
          size="large"
          @click="onClick"
        >
          Large filled
        </MereButton>
      </div>
      <div class="mb-3">
        <MereButton
          class="mr-5"
          size="small"
          :outlined="true"
          @click="onClick"
        >
          Small outlined
        </MereButton>
        <MereButton
          class="mr-5"
          :outlined="true"
          @click="onClick"
        >
          Default outlined
        </MereButton>
        <MereButton
          size="large"
          :outlined="true"
          @click="onClick"
        >
          Large outlined
        </MereButton>
      </div>
      <div class="mb-3">
        <MereButton
          size="small"
          class="mr-3"
          :icon="true"
          @click="onClick"
        >
          <FontAwesomeIcon icon="user-secret" />
        </MereButton>
        <MereButton
          class="mr-3"
          :icon="true"
          @click="onClick"
        >
          <FontAwesomeIcon icon="user-secret" />
        </MereButton>
        <MereButton
          size="large"
          class="mr-3"
          :icon="true"
          @click="onClick"
        >
          <FontAwesomeIcon icon="user-secret" />
        </MereButton>
      </div>
      <div class="mb-3">
        <MereButton
          class="mb-2"
          size="small"
          :full-width="true"
          @click="onClick"
        >
          Full width filled small
        </MereButton>
        <MereButton
          class="mb-2"
          :full-width="true"
          @click="onClick"
        >
          Full width filled default
        </MereButton>
        <MereButton
          size="large"
          :full-width="true"
          @click="onClick"
        >
          Full width filled large
        </MereButton>
      </div>
      <div>
        <MereButton
          class="mb-2"
          size="small"
          :outlined="true"
          :full-width="true"
          @click="onClick"
        >
          Full width outlined small
        </MereButton>
        <MereButton
          class="mb-2"
          :full-width="true"
          :outlined="true"
          @click="onClick"
        >
          Full width outlined default
        </MereButton>
        <MereButton
          size="large"
          :outlined="true"
          :full-width="true"
          @click="onClick"
        >
          Full width outlined large
        </MereButton>
      </div>
    </div>
  `,
  methods: actions,
});
