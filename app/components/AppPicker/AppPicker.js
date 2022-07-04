import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  FlatList,
  Text
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import AppText from "../AppText/AppText";
import { useState } from "react";
import AppModal from "../AppModal/AppModal";
import PickerItem from "./PickerItem";

export default function AppPicker(props) {
  const { iconName, placeholder, onPickerValueChange, selectedItem, dataList } =
    props;
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => setModalOpen(true);
  const hideModal = () => setModalOpen(false);

  const handlePickerValueChange = value => {
    onPickerValueChange(value);
    hideModal();
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={showModal}>
        <View style={styles.container}>
          {iconName && (
            <MaterialCommunityIcons name={iconName} style={styles.icon} />
          )}
          <AppText style={styles.text}>
            {selectedItem.label || placeholder}
          </AppText>
          <MaterialCommunityIcons name="chevron-down" style={styles.icon} />
        </View>
      </TouchableWithoutFeedback>
      <AppModal open={modalOpen} onClose={hideModal}>
        <FlatList
          data={dataList}
          keyExtractor={item => item.value}
          renderItem={({ item }) => (
            <PickerItem onPress={() => handlePickerValueChange(item)}>
              {item.label}
            </PickerItem>
          )}
        />
      </AppModal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    width: "100%",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginVertical: 10
  },
  icon: {
    fontSize: 18
  },
  text: {
    flexGrow: 1,
    marginHorizontal: 10
  }
});
