import type { FieldValues, Path, UseFormSetError } from "react-hook-form";

export const setErrors = <T extends FieldValues>(
  errors: Record<string, string>,
  setError: UseFormSetError<T>
) => {
  for (const [name, message] of Object.entries(errors)) {
    setError(name as Path<T>, { type: "server", message });
  }
};
