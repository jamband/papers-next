export const formDataToJsonString = (formData: FormData) => {
  const data = Object.fromEntries(formData);
  return JSON.stringify(data).replace('"on"', "true");
};
