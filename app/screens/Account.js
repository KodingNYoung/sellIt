import { FlatList, StyleSheet, Text, View } from "react-native";
import { menuItems } from "../../data";
import AppIcon from "../components/AppIcons/AppIcon";
import ListItem from "../components/ListItem/ListItem";
import AppSafeScreen from "../components/Screen/AppSafeScreen";
import ListItemSeperator from "../components/Separator/ListItemSeperator";
import colors from "../config/colors";

export default function Account() {
  return (
    <AppSafeScreen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Adebambo Abiodun"
          subtitle="abiodunadebambo44@gmail.com"
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.title.toString()}
          renderItem={({ item }) => (
            <ListItem
              IconComponent={
                <AppIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                  size={50}
                />
              }
              title={item.title}
            />
          )}
          ItemSeparatorComponent={ListItemSeperator}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          IconComponent={
            <AppIcon name="logout" backgroundColor="#ffe66d" size={50} />
          }
          title="Log Out"
        />
      </View>
    </AppSafeScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.lightGrey
  },
  container: {
    marginBottom: 20
  }
});
