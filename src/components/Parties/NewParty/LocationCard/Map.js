import React, { useState, useEffect, useContext } from "react";
import { View } from "react-native";
import MapView, { Marker, AnimatedRegion, Animated } from "react-native-maps";
import { LocationContext } from "../../../../contexts/LocationContext";

export const Map = props => {
  const { location, currentPosition, _getAddressAsync } = useContext(
    LocationContext
  );

  return (
    <View>
      {location !== null ? (
        <MapView
          style={{ height: 400, width: "100%" }}
          region={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
          }}
        >
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
        </MapView>
      ) : null}
    </View>
  );
};
