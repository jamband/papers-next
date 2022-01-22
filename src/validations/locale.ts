import { setLocale } from "yup";

setLocale({
  mixed: {
    required: "The ${path} field is required.",
  },
  string: {
    min: "The ${path} must be at least ${min} characters.",
    email: "The ${path} must be a valid email address.",
  },
});
