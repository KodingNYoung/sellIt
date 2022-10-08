import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  StatusBar,
  ImageBackground
} from "react-native";
import AppButton from "../components/AppButton/AppButton";

export default function Welcome() {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      resizeMode="cover"
      style={styles.background}
      blurRadius={10}
    >
      <View style={styles.logoView}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={() => alert("Login?")} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => alert("Register?")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  logoView: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 70
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 15
  },
  tagline: {
    fontSize: 25,
    fontWeight: "bold"
  },
  buttonsContainer: {
    padding: 15
  }
});
