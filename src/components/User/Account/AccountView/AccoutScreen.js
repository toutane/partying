import React, { useContext } from "react";
import { View, Button } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";
import { MyPartiesScrollView } from "./Parties/MyParties/MyPartiesScrollView";

import { UserContext } from "../../../../contexts/UserContext";
import { RequestsContext } from "../../../../contexts/RequestsContext";
import { screenHeight } from "../../../../utils/dimensions";

import ScrollViewFriends from "../../Friends/FriendsView/ScrollViewFriends";

export default function AccountScreen(props) {
  const { currentUserParties, currentUserData } = useContext(UserContext);
  const { sendRequest } = useContext(RequestsContext);
  return (
    <View
      style={{
        marginTop: useSafeArea().top - 14,
        marginBottom: screenHeight - 130,
      }}
    >
      {props.user.user_id !== "TqqSXtb05CUYDay5opIGFl89s402" && (
        <Button
          title="Send request (to john)"
          onPress={() =>
            sendRequest({
              user_id: "TqqSXtb05CUYDay5opIGFl89s402",
              username: "John",
              requests: [],
              expoPushToken: "ExponentPushToken[QgIEbWKYkGW_aMuVKv6EhS]",
            })
          }
        />
      )}
      {!props.isLoading &&
      (currentUserData.requests.length ||
        currentUserData.requests_sent.length > 0) > 0 ? (
        <ScrollViewFriends {...props} />
      ) : null}
      {currentUserParties.length > 0 && (
        <MyPartiesScrollView {...props} parties={currentUserParties} />
      )}
    </View>
  );
}
