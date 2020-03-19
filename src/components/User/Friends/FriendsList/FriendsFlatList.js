import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { Item } from "./Item";
import { screenHeight } from "../../../../utils/dimensions";
import { useSafeArea } from "react-native-safe-area-context";

export const FriendsFlatList = props => {
  useEffect(() => console.log(props.friends), [props.friends]);
  const margin = 46 + useSafeArea().top;
  return (
    <FlatList
      style={{
        paddingHorizontal: 25,
        height: screenHeight
      }}
      data={props.friends}
      renderItem={({ item, index }) => (
        <View
          style={{
            height: screenHeight / 2,
            marginTop: index === 0 ? margin : 0
          }}
        >
          <Item friend={item} {...props} />
        </View>
      )}
      ListFooterComponent={
        <View>{props.loading && <ActivityIndicator />}</View>
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
