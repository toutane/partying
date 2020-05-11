import React from "react";
import ContentLoader, { Rect, Circle } from "react-content-loader/native";
import { screenWidth } from "../../../../../utils/dimensions";

const HeaderLoader = (props) => (
  <ContentLoader
    speed={2}
    width={screenWidth}
    height={65}
    viewBox={`0 0 ${screenWidth} 65`}
    backgroundColor={props.theme.gray5}
    foregroundColor={props.theme.gray3}
  >
    <Rect x="80" y="10" rx="6" ry="6" width="110" height="22" />
    <Rect x="80" y="40" rx="3" ry="3" width="175" height="15" />
    <Rect x="0" y="0" rx="19" ry="19" width="65" height="65" />
    {/* <Circle cx="32.5" cy="32.5" r="32.5" /> */}
  </ContentLoader>
);

export default HeaderLoader;
