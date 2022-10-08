import React from "react";
import { Formik } from "formik";

export default function AppForm(props) {
  const { initialValues, onSubmit, children, validationSchema } = props;
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => {
        return <>{children}</>;
      }}
    </Formik>
  );
}
