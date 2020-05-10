import React from "react";
import { View, ActivityIndicator } from "react-native";
import { Item } from "./Item";

export const NumbersBar = (props) => {
  return (
    <View
      style={{
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 100,
          height: 35,
          // backgroundColor: "powderblue",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.user.friends_id !== undefined ? (
          <Item
            {...props}
            intro="You have"
            data={props.user.friends_id.length}
            type="friends"
            text={`friend${props.user.friends_id.length > 1 ? "s" : ""}`}
          />
        ) : (
          <View>
            <ActivityIndicator />
          </View>
        )}
      </View>
      <View
        style={{ backgroundColor: props.theme.gray3, width: 1, height: 35 }}
      />
      <View
        style={{
          width: 100,
          height: 35,
          // backgroundColor: "skyblue",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Item
          {...props}
          intro="You went to"
          data={0}
          type="parties"
          text={`party`}
        />
      </View>
      <View
        style={{ backgroundColor: props.theme.gray3, width: 1, height: 35 }}
      />
      <View
        style={{
          width: 100,
          height: 35,
          // backgroundColor: "steelblue",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Item
          {...props}
          intro="You created"
          data={
            props.user.parties_id !== undefined && props.user.parties_id.length
          }
          type="organized"
          text="organized"
        />
      </View>
    </View>
  );
};
