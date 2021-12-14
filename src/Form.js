import React from "react";
import { useFormik } from "formik";

export function Form() {
  //   const validate = (values) => {
  //     const errors = {};
  // if(!values.email){
  //     errors.email = 'Requided ' }
  //     else if(values.email.length < 4){
  //         errors.email = 'Must be 5 characters or more'
  //     }
  // }

  const formik = useFormik({
    initialValues: {
      where: "",
      checkIn: "",
      checkOut: "",
      adults: "",
      children: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input
          id="where"
          name="where"
          onChange={formik.handleChange}
          value={formik.values.where}
          placeholder="Where are you going?"
        ></input>
      </div>
      <div>
        <label htmlFor="checkIn" value={formik.values.date}>
          check in
        </label>
        <input
          type="date"
          id="checkIn"
          name="checkIn"
          onChange={formik.handleChange}
        ></input>
        <label htmlFor="checkOut" value={formik.values.date}>
          check out
        </label>
        <input
          type="date"
          id="checkOut"
          name="checkOut"
          onChange={formik.handleChange}
        ></input>
      </div>
      <legend>Add guests</legend>{" "}
      <input
        placeholder="0"
        type="number"
        min="0"
        max="100"
        step="1"
        id="adults"
        name="adults"
        onChange={formik.handleChange}
      ></input>
      <input
        placeholder="0"
        type="number"
        min="0"
        max="100"
        step="1"
        id="children"
        name="children"
        onChange={formik.handleChange}
      ></input>
      <div>
        <button type="submit">Search</button>
      </div>
    </form>
  );
}

export default Form;
