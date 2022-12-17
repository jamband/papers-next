import type {
  FieldValues,
  Path,
  UnPackAsyncDefaultValues,
  UseFormSetError,
} from "react-hook-form";

export const setErrors = <T extends FieldValues>(
  errors: Record<string, string>,
  setError: UseFormSetError<T>
) => {
  for (const [name, message] of Object.entries(errors)) {
    setError(name as Path<UnPackAsyncDefaultValues<T>>, {
      type: "server",
      message,
    });
  }
};
