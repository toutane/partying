import React from "react";
import { Hr } from "../../../hr";

import { TopViewCard } from "./styles";
import { MiddleView } from "./Middle/MiddleView";
import { FooterView } from "./Footer/FooterView";

export const TopView = props => {
  return (
    <TopViewCard {...props} style={{ zIndex: 2 }}>
      <MiddleView {...props} />
      <Hr {...props} />
      <FooterView {...props} />
    </TopViewCard>
  );
};
