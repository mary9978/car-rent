import * as yup from "yup";


export const basicSchema = yup.object().shape({
  email: yup.string().email("please enter valid email").required("Required"),
  password: yup
    .string()
    .min(8, "at least 8 chars")
    .matches(/[a-z]/, "at least one lowercase char")
    .matches(/[A-Z]/, "at least one uppercase char")
    .matches(
      /[a-zA-Z]+[^a-zA-Z\s]+/,
      "at least 1 number or special char (@,!,#, etc)."
    )
    .required("Required"),
});
