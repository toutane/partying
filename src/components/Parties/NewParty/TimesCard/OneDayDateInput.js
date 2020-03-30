import React, { useContext, useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import { CreatePartyContext } from "../../../../contexts/CreatePartyContext";
import DateTimePicker from "react-native-modal-datetime-picker";

const moment = require("moment");

export const OneDayDateInput = props => {
  const { theme, colorScheme } = useContext(ThemeContext);
  const { partyStarts, setPartyStarts, partyEnds, setPartyEnds } = useContext(
    CreatePartyContext
  );
  const [show, setShow] = useState(false);

  const handleConfirm = selectedDate => {
    let newdate = new Date(selectedDate);

    setPartyStarts({
      date: selectedDate,
      time: partyStarts.time
    });
    // setPartyEnds({
    //   date: new Date(newdate.setDate(newdate.getDate() + 1)),
    //   time: partyEnds.time
    // });
    setShow(false);
  };

  // useEffect(() => console.log(moment(partyEnds.date).format("dddd MMMM Do")), [
  //   partyEnds
  // ]);

  return (
    <View>
      <View style={{ flexDirection: "row", marginTop: 6 }}>
        <View style={{ flexDirection: "column", marginTop: 3 }}>
          <Text
            style={{
              fontFamily: "sf-text-medium",
              fontSize: 15,
              color: props.theme.gray4,
              marginRight: 15
            }}
          >
            on
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            marginLeft: 10,
            marginBottom: 10,
            marginTop: 1
          }}
        >
          <TouchableOpacity onPress={() => setShow(prvState => !prvState)}>
            <Text
              style={{
                fontFamily: "sf-text-semibold",
                fontSize: 17,
                color: props.theme.fontColor
              }}
              numberOfLines={2}
            >
              {// JSON.stringify(partyStarts.date)
              moment(partyStarts.date).format("dddd MMMM Do")}
            </Text>
          </TouchableOpacity>
        </View>
        <DateTimePicker
          isDarkModeEnabled={theme.theme === "dark"}
          textColor={theme.fontColor}
          mode="date"
          isVisible={show}
          date={partyStarts.date}
          onConfirm={date => handleConfirm(date)}
          onCancel={() => setShow(false)}
          confirmButtonStyles={{ text: { color: "red" } }}
        />
      </View>
    </View>
  );
};
