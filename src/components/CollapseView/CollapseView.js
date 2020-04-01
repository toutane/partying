import React, { useState, useEffect } from "react";
import { Animated, View } from "react-native";

export const CollapseView = props => {
  const [heightAnim] = useState(new Animated.Value(props.minHeight));

  useEffect(() => {
    // console.log(props.collapse);
    !props.collapse
      ? Animated.timing(heightAnim, {
          toValue: props.minHeight,
          duration: props.duration
        }).start()
      : Animated.timing(heightAnim, {
          toValue: props.maxHeight,
          duration: props.duration
        }).start();
  }, [props.collapse]);

  return (
    <Animated.View
      style={{
        height: heightAnim
      }}
    >
      {props.children}
    </Animated.View>
  );
};
