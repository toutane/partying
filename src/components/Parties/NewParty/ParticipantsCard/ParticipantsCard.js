import React, { useContext } from "react";
import { View, Text } from "react-native";
import { Card } from "../../../Card/styles";
import { Hr } from "../../../hr";
import { CreatePartyContext } from "../../../../contexts/CreatePartyContext";
import { ThumbnailsList } from "./ThumbnailsList/ThumbnailsList";
import { AddGuestButton } from "./AddGuestButton";
import { UserContext } from "../../../../contexts/UserContext";

export const ParticipantsCard = (props) => {
  const { currentUserData } = useContext(UserContext);
  const { guests_id, setGuests_id } = useContext(CreatePartyContext);
  return (
    <View style={{ marginBottom: 30, paddingHorizontal: 25 }}>
      <Card {...props}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "sf-text-semibold",
              fontSize: 17,
              color: props.theme.fontColor,
            }}
          >
            Set the participants
          </Text>
          <Text
            style={{
              fontFamily: "sf-text-regular",
              fontSize: 15,
              color: props.theme.gray4,
            }}
          >
            {guests_id.length !== 0
              ? `( ${guests_id.length} guest${
                  guests_id.length > 1 ? "s" : ""
                } )`
              : null}
          </Text>
        </View>
        <Hr {...props} style={{ marginTop: 20, marginBottom: 20 }} />
        <ThumbnailsList {...props} data={guests_id} />
        <AddGuestButton {...props} user={currentUserData} />
      </Card>
    </View>
  );
};
