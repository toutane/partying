import React from "react";
import { View, Text } from "react-native";
import MapView from "react-native-maps";

export const Map = props => {
  return (
    <View>
      <MapView
        style={{ height: 400, width: "100%" }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      />
    </View>
  );
};
