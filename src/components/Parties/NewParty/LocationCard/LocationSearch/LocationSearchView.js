import React, { useContext } from "react";
import { View, Text } from "react-native";
import { GoogleAutocomplete } from "./GoogleAutocomplete";
import { LocationContext } from "./../../../../../contexts/LocationContext";

export const LocationSearchView = (props) => {
  const {
    searchingLocation,
    setSearchingLocation,
    _getCoordsAsync,
  } = useContext(LocationContext);
  return (
    <View style={{ paddingVertical: 15 }}>
      <Text
        style={{
          marginLeft: 25,
          marginBottom: 15,
          fontFamily: "sf-text-medium",
          fontSize: 17,
          color: props.theme.fontColor,
        }}
      >
        Set the place :
      </Text>
      <GoogleAutocomplete
        {...props}
        location={searchingLocation}
        // setLocation={setSearchingLocation}
        _getCoordsAsync={_getCoordsAsync}
      />
    </View>
  );
};
