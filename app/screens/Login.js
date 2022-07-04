import React from "react";
import { Image, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

// core component
import AppSafeScreen from "../components/Screen/AppSafeScreen";
import AppTextInput from "../components/AppTextInput/AppTextInput";
import AppButton from "../components/AppButton/AppButton";
import AppFormField from "../components/AppFormField/AppFormField";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password")
});

export default function Login() {
  return (
    <AppSafeScreen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => {
          return (
            <>
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                iconName="email"
                placeholder="Email"
                keyboardType="email-address"
                textContentType="emailAddress"
                name="email"
              />
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                iconName="lock"
                placeholder="Password"
                textContentType="password"
                secureTextEntry
                name="password"
              />
              <AppButton title="Login" onPress={handleSubmit} />
            </>
          );
        }}
      </Formik>
    </AppSafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20
  }
});
