import React, { useContext } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { GoogleAutocomplete } from "./GoogleAutocomplete";
import { LocationContext } from "./../../../../../contexts/LocationContext";

export const LocationSearchView = props => {
  const { searchingLocation, setSearchingLocation } = useContext(
    LocationContext
  );
  return (
    <View style={{ paddingVertical: 10 }}>
      <GoogleAutocomplete
        {...props}
        location={searchingLocation}
        setLocation={setSearchingLocation}
      />
    </View>
  );
};
