import { StyleSheet } from "react-native";
import React from "react";
import AppText from "../AppText/AppText";
import defaultStyles from "../../config/styles";

export default function HelperText(props) {
  const { visible, error } = props;
  if (!visible) return null;

  return <AppText style={[styles.helper]}>{error}</AppText>;
}

const styles = StyleSheet.create({
  helper: {
    fontSize: 15,
    color: defaultStyles.colors.danger
  }
});
