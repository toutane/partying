import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-feather1s";
import { CreatePartyContext } from "../../../../contexts/CreatePartyContext";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import DateTimePicker from "react-native-modal-datetime-picker";

const moment = require("moment");

export const TimeInput = props => {
  const { theme } = useContext(ThemeContext);
  const { partyStarts, setPartyStarts, partyEnds, setPartyEnds } = useContext(
    CreatePartyContext
  );
  const [pickerMode, setPickerMode] = useState("");
  const [show, setShow] = useState(false);

  const handleConfirm = selectedDate => {
    let newdate = new Date(selectedDate);
    pickerMode == "starts"
      ? setPartyStarts({
          date: partyStarts.date,
          time: selectedDate
        })
      : // setPartyEnds(prvState => ({
        //   date: partyStarts.date,
        //   time:
        //     // prvState.time < selectedDate
        //     //   ? new Date(newdate.setHours(newdate.getHours() + 1))
        //     //   : prvState.time
        // }))
        setPartyEnds({ date: partyEnds.date, time: selectedDate });
    setShow(false);
  };
  return (
    <View
      style={{
        height: 85
      }}
    >
      <Text
        style={{
          fontFamily: "sf-text-medium",
          fontSize: 17,
          color: props.theme.fontColor,
          marginBottom: 15
        }}
      >
        Time :
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          height: 40
        }}
      >
        <Icon
          name="clock"
          size={30}
          color={props.theme.gray4}
          style={{ marginRight: 10 }}
        />
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
          <View
            style={{ flexDirection: "column", marginLeft: 10, marginTop: 1 }}
          >
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
                {moment(partyStarts.time).format("LT")}
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
                {moment(partyEnds.time).format("LT")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <DateTimePicker
        isDarkModeEnabled={theme.theme === "dark"}
        // for expo SDK 37
        textColor="red"
        mode="time"
        isVisible={show}
        date={
          pickerMode !== ""
            ? pickerMode === "starts"
              ? partyStarts.time
              : partyEnds.time
            : new Date()
        }
        onConfirm={date => handleConfirm(date)}
        onCancel={() => setShow(false)}
        confirmButtonStyles={{ text: { color: "red" } }}
      />
    </View>
  );
};

// - [ ] ajouter la différenciation : event de plus de une journée ou nom (pour faire apparaitre ou non la selection du jour de fin de l'event) : si l'event dure plusieurs jours, afficher dans le coin de la card e nombre de jours.
