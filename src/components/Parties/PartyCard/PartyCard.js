import React from "react";
import { TouchableOpacity } from "react-native";
import { Card } from "./styles";

import CardHeader from "./CardHeader/CardHeader";

export default function PartyCard(props) {
  return (
    <TouchableOpacity>
      <Card {...props}>
        <CardHeader {...props} />
      </Card>
    </TouchableOpacity>
  );
}
