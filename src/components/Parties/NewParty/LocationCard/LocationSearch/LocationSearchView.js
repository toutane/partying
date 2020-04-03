import React, { useContext } from "react";
import { View } from "react-native";
import { GoogleAutocomplete } from "./GoogleAutocomplete";
import { LocationContext } from "./../../../../../contexts/LocationContext";

export const LocationSearchView = props => {
  const {
    searchingLocation,
    setSearchingLocation,
    _getCoordsAsync
  } = useContext(LocationContext);
  return (
    <View style={{ paddingVertical: 10 }}>
      <GoogleAutocomplete
        {...props}
        location={searchingLocation}
        // setLocation={setSearchingLocation}
        _getCoordsAsync={_getCoordsAsync}
      />
    </View>
  );
};
