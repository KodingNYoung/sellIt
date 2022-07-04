import { StyleSheet, Text, TouchableHighlight } from "react-native";
import React from "react";
import defaultStyles from "../../config/styles";

export default function PickerItem(props) {
  const { onPress, children } = props;
  return (
    <TouchableHighlight onPress={onPress} underlayColor="#cccccc80">
      <Text style={[defaultStyles.text, styles.item]}>{children}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10
  }
});
