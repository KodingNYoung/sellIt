import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import defaultStyles from "../../config/styles";
import HelperText from "../HelperText/HelperText";

export default function AppTextInput(props) {
  const { iconName, placeholder, helperText, ...restProps } = props;
  return (
    <View style={styles.container}>
      <View style={styles.field}>
        {iconName && (
          <MaterialCommunityIcons name={iconName} style={styles.icon} />
        )}
        <TextInput
          style={[styles.input, defaultStyles.text]}
          placeholder={placeholder}
          {...restProps}
        />
      </View>
      <HelperText error={helperText.error} visible={helperText.visible} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8
  },
  field: {
    backgroundColor: colors.lightGrey,
    width: "100%",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginVertical: 2
  },
  icon: {
    fontSize: 18
  },
  input: {
    paddingHorizontal: 10,
    flex: 1
  }
});
