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
  const [currentPositionAddress, setCurrentPositionAddress] = useState([
    { name: "8 rue Alphonse XIII" }
  ]);
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState([{ name: "8 rue Alphonse XIII" }]);
  const [errorMessage, setErroMessage] = useState(null);

  // useEffect(() => console.log(location, address), [location, address]);

  useEffect(() => {
    appState == "active" && checkLocationPermissionsStatus();
  }, [appState]);

  async function checkLocationPermissionsStatus() {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    status === "granted" && _getLocationAsync();
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
      ? setCurrentPositionAddress(address)
      : setAddress(address);
  }

  return (
    <Provider
      value={{
        location,
        setLocation,
        currentPosition,
        currentPositionAddress,
        address,
        _getAddressAsync,
        errorMessage
      }}
    >
      {props.children}
    </Provider>
  );
};

export { LocationProvider, LocationContext };
