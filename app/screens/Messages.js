import { useState } from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "../components/ListItem/ListItem";
import ListItemSeperator from "../components/Separator/ListItemSeperator";
import AppSafeScreen from "../components/Screen/AppSafeScreen";
import DeleteAction from "../components/ListItem/DeleteAction";

// data
import { initialMessage } from "../../data";

export default function Messages() {
  const [messages, setMessage] = useState(initialMessage);
  const [refreshing, setRefreshing] = useState(false);

  const handleMessageDelete = id => {
    // delete the message from state
    setMessage(prevMessages => prevMessages.filter(msg => msg.id !== id));

    // delete on server
  };
  const handleRefresh = () => {
    setMessage(initialMessage);
  };

  return (
    <AppSafeScreen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log(item)}
            renderRightActions={() => (
              <DeleteAction onPress={() => handleMessageDelete(item.id)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </AppSafeScreen>
  );
}

const styles = StyleSheet.create({});
