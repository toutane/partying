import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Card } from "../../../Card/styles";
import { Hr } from "../../../hr";
import { Map } from "./Map";
import { LocationSearchView } from "./LocationSearch/LocationSearchView";
import { OptionsInputs } from "./OptionsInputs";

export const LocationCard = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <View style={{ marginTop: 30, marginBottom: 210, paddingHorizontal: 25 }}>
      <Card isFullWidth={true} {...props}>
        <TouchableOpacity
          style={{ paddingHorizontal: 20 }}
          activeOpacity={0.7}
          onPress={() => setShowInfo((prvState) => !prvState)}
        >
          <Text
            style={{
              marginBottom: 5,
              fontFamily: "sf-text-semibold",
              fontSize: 17,
              color: props.theme.fontColor,
            }}
          >
            Set the location
          </Text>
          <Text
            style={{
              marginBottom: 15,
              fontFamily: "sf-text-regular",
              fontSize: 13,
              color: props.theme.gray2,
            }}
            numberOfLines={showInfo ? 10 : 1}
          >
            By default, the location of your event is your current location
            {/* Inform participants of the event where it will take place. You can
            detail information about this place. */}
          </Text>
        </TouchableOpacity>
        <Hr {...props} style={{ marginLeft: 25, marginRight: 25 }} />
        <OptionsInputs {...props} />
        <Hr {...props} style={{ marginLeft: 25, marginRight: 25 }} />
        <LocationSearchView {...props} />
        <Hr {...props} />
        <Map />
        <Hr {...props} />
      </Card>
    </View>
  );
};
