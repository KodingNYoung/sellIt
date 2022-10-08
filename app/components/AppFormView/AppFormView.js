import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import React from "react";
import AppSafeScreen from "../Screen/AppSafeScreen";

export default function AppFormView(props) {
  const { children } = props;
  return (
    <AppSafeScreen style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.touchable}>{children}</View>
      </TouchableWithoutFeedback>
    </AppSafeScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 15
  },
  touchable: {
    flex: 1
  }
});
