import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import {
  Swipeable,
  GestureHandlerRootView
} from "react-native-gesture-handler";

import colors from "../../config/colors";
import AppText from "../AppText/AppText";

export default function ListItem(props) {
  const { image, title, subtitle, onPress, renderRightActions, IconComponent } =
    props;
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight onPress={onPress} underlayColor={colors.lightGrey}>
          <View style={styles.container}>
            {image && <Image style={styles.image} source={image} />}
            {IconComponent}
            <View style={styles.userDetails}>
              <AppText style={styles.title}>{title}</AppText>
              {subtitle && (
                <AppText style={styles.subTitle}>{subtitle}</AppText>
              )}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35
  },
  userDetails: {
    marginLeft: 10,
    justifyContent: "center"
  },
  title: {
    fontWeight: "bold"
  },
  subTitle: {
    color: colors.grey
  }
});
