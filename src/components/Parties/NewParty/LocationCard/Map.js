import React, { useState, useEffect, useContext } from "react";
import { View } from "react-native";
import MapView, { Marker, AnimatedRegion, Animated } from "react-native-maps";
import { LocationContext } from "../../../../contexts/LocationContext";

export const Map = (props) => {
  const { location, currentPosition, _getAddressAsync } = useContext(
    LocationContext
  );

  return (
    <View>
      <MapView
        style={{ height: 400, width: "100%" }}
        region={{
          latitude: location !== null ? location.coords.latitude : 48.85,
          longitude: location !== null ? location.coords.longitude : 2.281,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {location !== null ? (
          <Marker
            coordinate={location.coords}
            title="Your position"
            pinColor="red"
            description={`near ${
              location.name !== undefined ? location.name : location.description
            }`}
          >
            {/* <View style={{ backgroundColor: "red" }}>
              <Text>{currentAddress[0].name}</Text>
            </View> */}
          </Marker>
        ) : null}
      </MapView>
    </View>
  );
};
