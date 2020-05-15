import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { Item } from "./Item";
import { screenHeight, screenWidth } from "../../../../../utils/dimensions";
import { useSafeArea } from "react-native-safe-area-context";
// import { AddFriendsCard } from "../../../../User/Friends/FriendsCard/FriendsCard";

export const FriendsFlatList = (props) => {
  const margin = 136 + useSafeArea().top;
  return (
    <FlatList
      style={{
        height: screenHeight,
        // paddingHorizontal: 15,
        paddingTop: margin,
        paddingVertical: 10,
      }}
      data={props.friends}
      renderItem={({ item, index }) => (
        <Item
          friend={item}
          index={index}
          margin={margin}
          selected={props.guests_id.includes(item.user_id)}
          {...props}
        />
      )}
      ListFooterComponent={
        <View
          style={{
            height: 130 + useSafeArea().top,
          }}
        >
          {!props.hasFriends && (
            <View style={{ paddingHorizontal: 10 }}>
              {/* <AddFriendsCard /> */}
            </View>
          )}
        </View>
      }
      keyExtractor={(item, index) => index.toString()}
      onEndReached={() => props.retrieveMore(props.user.user_id)}
      // How Close To The End Of List Until Next Data Request Is Made
      onEndReachedThreshold={0}
      // Refreshing (Set To True When End Reached)
      refreshing={props.refreshing}
    />
  );
};
