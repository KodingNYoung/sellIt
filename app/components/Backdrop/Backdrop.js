import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";

export default function Backdrop(props) {
  const { onPress } = props;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.underlay} />
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  underlay: {
    backgroundColor: "red",
    width: "100%",
    height: "100%",
    backgroundColor: "#00000080",
    position: "absolute"
  }
});
