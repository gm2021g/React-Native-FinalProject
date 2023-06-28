const formatEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const minPasswordLength = 7;
export const UPDATE_FORM = "UPDATE_FORM";

const validateInput = ({ name, value }) => {
  let hasError = false;
  let error = "";
  const formatValue = value.trim();

  switch (name) {
    case "email":
      if (formatValue === "") {
        hasError = true;
        error = "Email is required";
      } else if (!formatEmail.test(formatValue)) {
        hasError = true;
        error = "Email is invalid";
      } else {
        hasError = false;
        error = "";
      }
      break;
    case "password":
      if (formatValue === "") {
        hasError = true;
        error = "Password is required";
      } else if (formatValue.length < minPasswordLength) {
        hasError = true;
        error = `Password must be at least ${minPasswordLength} characters`;
      } else {
        hasError = false;
        error = "";
      }
      break;
    default:
      break;
  }
  return { hasError, error };
};

export const onInputChange = ({ name, value, dispatch, formState }) => {
  const { hasError, error } = validateInput({ name, value });
  let isFormValid = true;

  // key es email y password
  for (const key in formState) {
    const item = formState[key]; // ejemplo formState[email]
    if (key !== name && hasError) {
      isFormValid = false;
      break;
    } else if (key !== name && item.hasError) {
      isFormValid = false;
      break;
    }
  }

  dispatch({
    type: UPDATE_FORM,
    data: {
      name, // nombre del campo
      value, // valor del campo
      hasError, // si tiene un error el campo
      error, // mensaje de error
      touched: true, // ya interactuó con ese campo
      isFormValid, // si el formulario es válido o no
    },
  });
};
