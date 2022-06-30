import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  StatusBar,
  ImageBackground
} from "react-native";

import colors from "../config/colors";

export default function Welcome() {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.logoView}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={[styles.actionActionView, styles.redView]}></View>
      <View style={[styles.actionActionView, styles.greenView]}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  logoView: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 70
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10
  },
  actionActionView: {
    height: 70
  },
  redView: {
    backgroundColor: colors.primary
  },
  greenView: {
    backgroundColor: colors.secondary
  }
});
