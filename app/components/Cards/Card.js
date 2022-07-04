import { Image, StyleSheet, Text, View } from "react-native";

import colors from "../../config/colors";
import AppText from "../AppText/AppText";

export default function Card(props) {
  const { image, title, subtitle } = props;
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 20
  },
  image: {
    width: "100%",
    height: 200
  },
  detailsContainer: {
    padding: 12
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "600",
    marginTop: 7
  }
});
