import { StyleSheet, View, Modal } from "react-native";

import Backdrop from "../Backdrop/Backdrop";

import defaultStyles from "../../config/styles";

export default function AppModal(props) {
  const { open, onClose, children } = props;
  return (
    <Modal visible={open} animationType="fade" transparent={true}>
      <View style={styles.modalContent}>
        <Backdrop onPress={onClose} />
        <View style={styles.modalCard}>{children}</View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex"
  },
  modalCard: {
    backgroundColor: defaultStyles.colors.white,
    width: "90%",
    paddingVertical: 15
  }
});
