import React, { useContext } from "react";
import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { LocationContext } from "../../../../contexts/LocationContext";

export const Map = props => {
  const { currentPosition, currentPositionAddress } = useContext(
    LocationContext
  );

  return (
    <View>
      {currentPosition !== null ? (
        <MapView
          style={{ height: 400, width: "100%" }}
          initialRegion={{
            latitude: currentPosition.coords.latitude,
            longitude: currentPosition.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          <Marker
            coordinate={currentPosition.coords}
            title="Your position"
            pinColor="red"
            description={`near ${currentPositionAddress[0].name}`}
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
