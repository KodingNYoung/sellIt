import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput/AppTextInput";

export default function AppFormField(props) {
  const { name, ...restProps } = props;
  const { setFieldTouched, handleChange, touched, errors } = useFormikContext();

  return (
    <AppTextInput
      onChangeText={handleChange(name)}
      helperText={{
        visible: touched[name],
        error: errors[name]
      }}
      onBlur={() => setFieldTouched(name)}
      {...restProps}
    />
  );
}
