import React, { useState, useEffect, useContext } from "react";
import { Platform } from "react-native";
import Constants from "expo-constants";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { AppContext } from "./AppContext";

const LocationContext = React.createContext();
const { Provider } = LocationContext;

const LocationProvider = props => {
  const { appState } = useContext(AppContext);

  const [currentPosition, setCurrentPosition] = useState(null);
  const [searchingLocation, setSearchingLocation] = useState({
    description: "search location"
  });
  const [location, setLocation] = useState(null);

  const [errorMessage, setErroMessage] = useState(null);

  // useEffect(() => console.log(location), [location]);
  // useEffect(() => console.log(searchingLocation), [searchingLocation]);
  // useEffect(() => console.log(currentPosition), [currentPosition]);

  useEffect(() => {
    searchingLocation.coords !== undefined
      ? setLocation(searchingLocation)
      : null;
  }, [searchingLocation]);

  useEffect(() => {
    setLocation(currentPosition);
  }, [currentPosition]);

  useEffect(() => {
    appState == "active" && checkLocationPermissionsStatus();
  }, [appState]);

  async function checkLocationPermissionsStatus() {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    status === "granted"
      ? _getLocationAsync()
      : console.log("Location permission not allowed");
  }

  async function _getLocationAsync() {
    let currentPosition = await Location.getCurrentPositionAsync({});
    Platform.OS === "android" && !Constants.isDevice
      ? setErroMessage(
          "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
        )
      : (setCurrentPosition(currentPosition),
        _getAddressAsync(currentPosition, "current"));
  }

  async function _getAddressAsync(location, mode) {
    let address = await Location.reverseGeocodeAsync(location.coords);
    mode === "current"
      ? setCurrentPosition({ ...location, ...address[0] })
      : setAddress(address);
  }

  async function _getCoordsAsync(address) {
    let coordinates = await Location.geocodeAsync(address.description);
    let coords = Object.assign({}, ...coordinates);
    setSearchingLocation({ ...address, coords });
  }

  return (
    <Provider
      value={{
        searchingLocation,
        setSearchingLocation,
        location,
        setLocation,
        currentPosition,
        _getAddressAsync,
        _getCoordsAsync,
        errorMessage
      }}
    >
      {props.children}
    </Provider>
  );
};

export { LocationProvider, LocationContext };
