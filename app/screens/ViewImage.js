import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Image
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const ViewImage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <MaterialCommunityIcons name="close" color={colors.white} size={30} />
        <MaterialCommunityIcons
          name="trash-can-outline"
          color={colors.white}
          size={30}
        />
      </View>
      <View style={styles.imageView}>
        <Image
          source={require("../assets/chair.jpg")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.black
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 30
  },
  imageView: {
    flex: 1
  },
  image: {
    width: "100%",
    height: "100%"
  }
});

export default ViewImage;
