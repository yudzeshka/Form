import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { Component } from "react";
import "./App.css";
import * as Yup from "yup";
import FormInput from "./FormInput";
import FormInputEmptyLabel from "./FormInputEmptyLabel";
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
          more18: false,
        }}
        onSubmit={(formValues) => {
          alert(JSON.stringify(formValues, null, 2));
        }}
        validationSchema={Yup.object().shape({
          where: Yup.string()
            .required("is required")
            .max(20, "should be less than 20 characters")
            .min(2, "to short"),

          checkIn: Yup.date().required("is required"),
          checkOut: Yup.date().required("is required"),
          adults: Yup.number()
            .required("is required")
            .min(1, "at least 1 adult"),
          children: Yup.number().required("is required"),
          more18: Yup.bool().oneOf(
            [true],
            "Confirm that you are over 18 years old"
          ),
        })}
      >
        {({ errors, touched, isValid }) => (
          <div className="container">
            <p>Welcome to our booking service</p>
            <Form>
              <Field
                className={
                  "where" + (errors.where && touched.where ? "Err" : "")
                }
                id="where"
                name="where"
                placeholder="Where are you going?"
                component={FormInputEmptyLabel}
              ></Field>
              <Field
                className={errors.checkIn && touched.checkIn ? "checkErr" : ""}
                name="checkIn"
                component={FormInput}
                type="date"
                label="check in"
              ></Field>
              <Field
                className={
                  errors.checkOut && touched.checkOut ? "checkErr" : ""
                }
                name="checkOut"
                component={FormInput}
                type="date"
                label="check out"
              ></Field>

              <legend>Add guests</legend>

              <Field
                className={
                  errors.children && touched.children ? "guestsErr" : ""
                }
                placeholder="adults"
                type="number"
                min="0"
                max="100"
                step="1"
                id="adults"
                name="adults"
              ></Field>
              <ErrorMessage name="adults" component="div" className="error" />
              <Field
                className={
                  errors.children && touched.children ? "guestsErr" : ""
                }
                placeholder="children"
                type="number"
                min="0"
                max="100"
                step="1"
                id="children"
                name="children"
              ></Field>
              <ErrorMessage name="children" component="div" className="error" />
              <div>
                <label htmlFor="more18">
                  I confirm that I am over 18 years old
                </label>
                <Field type="checkbox" id="more18" name="more18"></Field>
                <ErrorMessage name="more18" component="div" className="error" />
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
