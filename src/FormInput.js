import { ErrorMessage } from "formik";

function FormInput({ form, field, label, type = "text", className }) {
  return (
    <div>
      <label>{label}</label>
      <input type={type} className={className} {...field}></input>
      <ErrorMessage name={field.name} component="div" className="error" />
    </div>
  );
}

export default FormInput;
