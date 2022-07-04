import React from "react";
import { Text, TouchableOpacity } from "react-native";
import colors from "../../config/colors";

import styles from "./styles";

function AppButton(props) {
  const { title, color = "primary", onPress } = props;
  const dynamicStyles = {
    backgroundColor: colors[color]
  };
  return (
    <TouchableOpacity
      style={[styles.container, dynamicStyles]}
      activeOpacity={0.6}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;
