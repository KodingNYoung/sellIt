import React from "react";
import { Image, StyleSheet, View } from "react-native";
import * as Yup from "yup";

// core component
import AppFormField from "../components/AppFormField/AppFormField";
import SubmmitButton from "../components/SubmitButton/SubmitButton";
import AppForm from "../components/AppForm/AppForm";
import AppFormView from "../components/AppFormView/AppFormView";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password")
});

export default function Login() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
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
        <SubmmitButton title="Login" />
      </AppForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20
  }
});
