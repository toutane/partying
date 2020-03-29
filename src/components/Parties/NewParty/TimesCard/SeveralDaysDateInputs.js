import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import { CreatePartyContext } from "../../../../contexts/CreatePartyContext";
import DateTimePicker from "react-native-modal-datetime-picker";

const moment = require("moment");

export const SevralDaysDateInputs = props => {
  const { theme, colorScheme } = useContext(ThemeContext);

  const { partyStarts, setPartyStarts, partyEnds, setPartyEnds } = useContext(
    CreatePartyContext
  );
  const [pickerMode, setPickerMode] = useState("");
  const [show, setShow] = useState(false);

  const handleConfirm = selectedDate => {
    let newdate = new Date(selectedDate);
    pickerMode == "starts"
      ? (setPartyStarts({
          date: selectedDate,
          time: partyStarts.time
        }),
        setPartyEnds({
          date: new Date(newdate.setDate(newdate.getDate() + 1)),
          time: partyEnds.time
        }))
      : setPartyEnds({ date: selectedDate, time: partyEnds.time });
    setShow(false);
  };
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ flexDirection: "column", marginTop: 3 }}>
        <Text
          style={{
            fontFamily: "sf-text-medium",
            fontSize: 15,
            color: props.theme.gray4,
            marginBottom: 10
          }}
        >
          from
        </Text>
        <Text
          style={{
            fontFamily: "sf-text-medium",
            fontSize: 15,
            color: props.theme.gray4
          }}
        >
          to
        </Text>
      </View>
      <View style={{ flexDirection: "column", marginLeft: 10, marginTop: 1 }}>
        <TouchableOpacity
          onPress={() => {
            setShow(prvState => !prvState), setPickerMode("starts");
          }}
        >
          <Text
            style={{
              fontFamily: "sf-text-semibold",
              fontSize: 17,
              color: props.theme.fontColor,
              marginBottom: 10
            }}
            numberOfLines={2}
          >
            {moment(partyStarts.date).format("dddd MMMM Do")}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setShow(prvState => !prvState), setPickerMode("ends");
          }}
        >
          <Text
            style={{
              fontFamily: "sf-text-semibold",
              fontSize: 17,
              color: props.theme.fontColor
            }}
            numberOfLines={2}
          >
            {moment(partyEnds.date).format("dddd MMMM Do")}
          </Text>
        </TouchableOpacity>
      </View>
      <DateTimePicker
        isDarkModeEnabled={theme.theme === "dark"}
        // for expo SDK 37
        textColor="red"
        mode="date"
        isVisible={show}
        date={
          pickerMode !== ""
            ? pickerMode === "starts"
              ? partyStarts.date
              : partyEnds.date
            : new Date()
        }
        onConfirm={date => handleConfirm(date)}
        onCancel={() => setShow(false)}
        confirmButtonStyles={{ text: { color: "red" } }}
      />
    </View>
  );
};
