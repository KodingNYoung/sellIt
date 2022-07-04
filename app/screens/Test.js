import AppSafeScreen from "../components/Screen/AppSafeScreen";
import { Switch, Text, View } from "react-native";
import { useState } from "react";
import AppTextInput from "../components/AppTextInput/AppTextInput";
import { Picker } from "@react-native-picker/picker";

import defaultStyles from "../config/styles";
import AppPicker from "../components/AppPicker/AppPicker";
import { pickerValues } from "../../data";

const { Item } = Picker;
export default function Test() {
  const [value, setValue] = useState("");
  const [isNew, setIsNew] = useState(false);
  const [gender, setGender] = useState("boy");

  return (
    <AppSafeScreen style={{ padding: 10 }}>
      <View
        style={{ height: 100, justifyContent: "center", alignItems: "center" }}
      >
        <Text style>
          {value || "What ever you type in the box will display here..."}
        </Text>
        <Text style>Gender: {gender.label || "Not selected"}</Text>
      </View>
      <AppTextInput
        iconName="email"
        placeholder="Email"
        keyboardType="email-address"
      />
      {/* <Switch value={isNew} onValueChange={newValue => setIsNew(newValue)} />*/}
      <Picker
        onValueChange={value => setGender(value)}
        selectedValue={gender.value}
      >
        <Item label="Boy" value="boy" />
        <Item label="Girl" value="girl" />
      </Picker>
      <AppPicker
        placeholder="Select an input"
        iconName="account"
        onPickerValueChange={value => setGender(value)}
        selectedItem={gender}
        dataList={pickerValues}
      />
    </AppSafeScreen>
  );
}
