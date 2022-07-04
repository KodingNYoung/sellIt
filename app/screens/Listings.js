import {
  FlatList,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";
import { listings } from "../../data";
import Card from "../components/Cards/Card";
import AppSafeScreen from "../components/Screen/AppSafeScreen";
import colors from "../config/colors";

export default function Listings() {
  return (
    <AppSafeScreen style={styles.container}>
      <FlatList
        data={listings}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Card title={item.title} subtitle={item.price} image={item.image} />
        )}
        style={styles.list}
      />
    </AppSafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey
  },
  list: {
    marginVertical: 30,
    paddingHorizontal: 20
  }
});
