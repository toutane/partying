import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-feather1s";
import { CreatePartyContext } from "../../../../contexts/CreatePartyContext";
import { SevralDaysDateInputs } from "./SeveralDaysDateInputs";
import { OneDayDateInput } from "./OneDayDateInput";

export const DateInput = (props) => {
  const { severalDays } = useContext(CreatePartyContext);

  return (
    <View
      style={{
        // marginBottom: severalDays ? 0 : 7
        height: 100,
      }}
    >
      <Text
        style={{
          fontFamily: "sf-text-medium",
          fontSize: 15,
          color: props.theme.fontColor,
          marginBottom: 15,
        }}
      >
        Date :
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          // marginTop: severalDays ? 0 : 8
          height: 40,
        }}
      >
        <Icon
          name="calendar"
          size={30}
          color={props.theme.gray4}
          style={{ marginRight: 10 }}
        />
        {severalDays ? (
          <SevralDaysDateInputs {...props} />
        ) : (
          <OneDayDateInput {...props} />
        )}
      </View>
    </View>
  );
};

// - [ ] ajouter la différenciation : event de plus de une journée ou nom (pour faire apparaitre ou non la selection du jour de fin de l'event) : si l'event dure plusieurs jours, afficher dans le coin de la card e nombre de jours.
