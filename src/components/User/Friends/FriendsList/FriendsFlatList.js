import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { Item } from "./Item";

export const FriendsFlatList = props => {
  useEffect(() => console.log(props.friends), [props.friends]);

  return (
    <FlatList
      style={{ paddingHorizontal: 25 }}
      data={props.friends}
      renderItem={({ item, index }) => <Item friend={item} {...props} />}
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
