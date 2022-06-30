import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Image
} from "react-native";

import colors from "../config/colors";

const ViewImage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <View style={[styles.topBarBtn, styles.closeBtn]} />
        <View style={[styles.topBarBtn, styles.deleteBtn]} />
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
    paddingHorizontal: 30,
    paddingVertical: 10
  },
  topBarBtn: {
    width: 50,
    height: 50
  },
  closeBtn: {
    backgroundColor: colors.primary
  },
  deleteBtn: {
    backgroundColor: colors.secondary
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
