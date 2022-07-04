import { Image, StyleSheet, View } from "react-native";
import AppText from "../components/AppText/AppText";
import ListItem from "../components/ListItem/ListItem";
import colors from "../config/colors";

export default function ListingDetails(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Title</AppText>
        <AppText style={styles.subtitle}>$20</AppText>
      </View>
      <ListItem
        image={require("../assets/mosh.jpg")}
        title="Adebambo Abiodun"
        subtitle="5 listings"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300
  },
  detailsContainer: {
    padding: 15
  },
  title: {
    fontSize: 24,
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 20,
    color: colors.secondary,
    fontWeight: "bold",
    marginVertical: 10,
    marginBottom: 40
  }
});
