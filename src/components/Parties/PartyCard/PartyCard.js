import React from "react";
import { TouchableOpacity } from "react-native";
import { Card } from "./styles";
import { Hr } from "../../hr";

import { CardHeader } from "./CardHeader/CardHeader";
import { CardContent } from "./CardContent/CardContent";
import { CardFooter } from "./CardFooter/CardFooter";

export default function PartyCard(props) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() =>
        props.navigation.navigate("PartyView", { party: props.party })
      }
    >
      <Card {...props}>
        <CardHeader {...props} />
        <CardContent {...props} />
        <Hr {...props} />
        <CardFooter {...props} />
      </Card>
    </TouchableOpacity>
  );
}
