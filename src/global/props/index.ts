import { PropType } from "vue";
import { variants, sizes } from "@/global/constants";
import { Variant, Size } from "@/global/types";

export const variant = {
  variant: {
    type: String as PropType<Variant>,
    validator: (value: string): boolean => variants.includes(value),
  },
};

export const size = {
  size: {
    type: String as PropType<Size>,
    validator: (value: string): boolean => sizes.includes(value),
  },
};

export const label = {
  hiddenLabel: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    required: true,
  },
};

export const validation = {
  invalid: {
    type: Boolean,
    default: false,
  },
  valid: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
  helpText: {
    type: String,
  },
  errorText: {
    type: String,
  },
};

export const options = {
  options: {
    type: Array,
    required: true,
  },
};
