import { ErrorMessage } from "formik";

function FormInputEmptyLabel({ field, type = "text", className, placeholder }) {
  return (
    <div>
      <input
        type={type}
        className={className}
        {...field}
        placeholder={placeholder}
      ></input>
      <ErrorMessage name={field.name} component="div" className="error" />
    </div>
  );
}

export default FormInputEmptyLabel;
