import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../config/colors";

export default function ListItemSeperator() {
  return (
    <View style={styles.separator}>
      <Text>hey</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.lightGrey
  }
});
