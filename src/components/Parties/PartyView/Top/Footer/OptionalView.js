import React from "react";
import { View } from "react-native";
import { Hr } from "../../../../hr";
import { Item } from "./Item";

export const OptionalView = (props) => {
  return (
    <View>
      {props.party.entry_code === "" &&
      props.party.interphone === "" &&
      props.party.house !== "" ? (
        <Hr
          {...props}
          style={{
            marginBottom:
              props.party.entry_code === "" && props.party.interphone === ""
                ? 15
                : 0,
          }}
        />
      ) : null}
      {props.party.entry_code !== "" || props.party.interphone !== "" ? (
        <View>
          <Hr {...props} />
          <View
            style={{
              height: 55,
              marginTop: 10,
              marginBottom: props.party.house !== "" ? 10 : 0,
              flexDirection: "row",
            }}
          >
            {props.party.entry_code !== "" && (
              <Item
                title="Entry code"
                icon="key"
                data={props.party.entry_code}
                {...props}
              />
            )}
            {props.party.interphone !== "" && (
              <Item
                title="Interphone"
                icon="phone"
                data={props.party.interphone}
                {...props}
              />
            )}
          </View>
        </View>
      ) : null}
      {props.party.house !== "" && (
        <Item
          title="About the place..."
          icon="home"
          data={props.party.house}
          isFullWidth={true}
          {...props}
        />
      )}
    </View>
  );
};
