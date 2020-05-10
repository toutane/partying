import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, View, Text } from "react-native";
import { Item } from "./Item";
import { screenHeight, screenWidth } from "../../../../utils/dimensions";
import { useSafeArea } from "react-native-safe-area-context";
import { AddFriendsCard } from "../AddFriends/AddFriendsCard";
import { EmptyStreetSvg } from "../AddFriends/EmptyStreetSvg";

export const FriendsFlatList = (props) => {
  // useEffect(() => console.log(props.friends), [props.friends]);
  const margin = 96 + useSafeArea().top;
  return (
    <View>
      <FlatList
        style={{
          height: screenHeight,
          paddingHorizontal: 15,
          paddingTop: margin,
          paddingVertical: 10,
        }}
        data={props.friends}
        renderItem={({ item, index }) => (
          <Item friend={item} index={index} margin={margin} {...props} />
        )}
        ListFooterComponent={
          <View
            style={{
              height: 200 + useSafeArea().top,
            }}
          >
            {props.loading && props.user.friends_id.length > 0 ? (
              <ActivityIndicator />
            ) : null}
            <AddFriendsCard />
            {/* <EmptyStreetSvg /> */}
          </View>
        }
        keyExtractor={(item, index) => index.toString()}
        onEndReached={() => props.retrieveMore(props.user.user_id)}
        // How Close To The End Of List Until Next Data Request Is Made
        onEndReachedThreshold={0}
        // Refreshing (Set To True When End Reached)
        refreshing={props.refreshing}
      />
    </View>
  );
};
