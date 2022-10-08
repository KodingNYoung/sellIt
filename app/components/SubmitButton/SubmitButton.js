import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import AppButton from "../AppButton/AppButton";

export default function SubmmitButton(props) {
  const { title } = props;
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} />;
}

const styles = StyleSheet.create({});
