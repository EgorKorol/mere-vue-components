export const isArrayAndNotEmpty = (hypotheticalArray: unknown): boolean => {
  return Array.isArray(hypotheticalArray) && Boolean(hypotheticalArray.length);
};

export const getAriaDescribedby = ({
  helpText,
  errorText,
  id,
}: {
  helpText?: string;
  errorText?: string;
  id: string;
}): string | null => {
  let ids = "";

  if (!helpText && !errorText) {
    return null;
  }

  if (helpText) {
    ids += `desc-${id}`;
  }

  if (errorText) {
    ids += ` error-${id}`;
  }

  return ids.trim();
};

export const getComputedVariant = ({
  invalid,
  valid,
  variant,
}: {
  invalid: boolean;
  valid: boolean;
  variant: string;
}): string | null => {
  if (invalid) {
    return "error";
  }

  if (valid) {
    return "success";
  }

  return variant;
};
