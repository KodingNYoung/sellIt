import React from "react";
import { StyleSheet, Text } from "react-native";

import defaultStyles from "../../config/styles";

function AppText(props) {
  const { children, style } = props;
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({});

export default AppText;
