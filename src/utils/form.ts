import type { Path, UseFormSetError } from "react-hook-form";

export const setErrors = <T>(
  errors: Record<string, string>,
  setError: UseFormSetError<T>
) => {
  for (const [name, message] of Object.entries(errors)) {
    setError(name as Path<T>, { type: "server", message });
  }
};
