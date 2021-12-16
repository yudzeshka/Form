import { Formik, Form, Field } from "formik";
import React, { Component } from "react";
import "./App.css";
import * as Yup from "yup";
export default class FormFormik extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          where: "",
          checkIn: "",
          checkOut: "",
          adults: "",
          children: "",
          more18: "",
        }}
        onSubmit={(formValues) => {
          alert(JSON.stringify(formValues, null, 2));
        }}
        validationSchema={Yup.object().shape({
          where: Yup.string()
            .required("is required")
            .max(20, "should be less than 20 characters")
            .min(2, "to short"),
        })}
      >
        {({ errors, touched, isValid }) => (
          <div className="container">
            <p>Welcome to our booking service</p>
            <Form>
              <div>
                <Field
                  className="where"
                  id="where"
                  name="where"
                  placeholder="Where are you going?"
                ></Field>
                {errors.where && touched.where ? (
                  <div>{errors.where}</div>
                ) : null}
              </div>
              <div>
                <label htmlFor="checkIn" className="check">
                  check in
                </label>
                <Field type="date" id="checkIn" name="checkIn"></Field>
              </div>
              <div>
                <label htmlFor="checkOut" className="check">
                  check out
                </label>
                <Field type="date" id="checkOut" name="checkOut"></Field>
              </div>
              <legend>Add guests</legend>
              <Field
                placeholder="adults"
                type="number"
                min="0"
                max="100"
                step="1"
                id="adults"
                name="adults"
              ></Field>
              <Field
                placeholder="children"
                type="number"
                min="0"
                max="100"
                step="1"
                id="children"
                name="children"
              ></Field>
              <div>
                <label htmlFor="more18">
                  I confirm that I am over 18 years old
                </label>
                <Field type="checkbox" id="more18" name="more18"></Field>
              </div>
              <div>
                <button type="submit" disabled={!isValid}>
                  Search
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    );
  }
}
