import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 5
  },
  text: {
    textTransform: "uppercase",
    color: colors.white,
    fontSize: 18,
    fontWeight: "500"
  }
});

export default styles;
