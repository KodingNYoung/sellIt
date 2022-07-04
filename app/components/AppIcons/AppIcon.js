import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";

const AppIcon = props => {
  const {
    name,
    size = 40,
    backgroundColor = colors.black,
    color = colors.white
  } = props;

  const iconsStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor
  };

  return (
    <View style={[styles.container, iconsStyle]}>
      <MaterialCommunityIcons name={name} size={size / 2} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  }
});

export default AppIcon;
