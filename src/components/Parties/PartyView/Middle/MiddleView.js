import React from "react";
import { View, Text } from "react-native";
import { MiddleViewCard } from "./styles";

import { ThumbnailsList } from "./subco/ThumbnailsList";

export const MiddleView = props => {
  return (
    <MiddleViewCard {...props} style={{ zIndex: 1 }}>
      <Text
        style={{
          color: props.theme.fontColor,
          fontSize: 17,
          fontFamily: "sf-text-bold"
        }}
      >
        The participants{" "}
        <Text
          style={{
            fontSize: 15,
            fontFamily: "sf-text-semibold",
            color: props.theme.gray4
          }}
        >
          {`(${props.party.participants_id.length + 1}/${props.party.guests_id
            .length + 1})`}
        </Text>
      </Text>
      <ThumbnailsList {...props} />
    </MiddleViewCard>
  );
};
