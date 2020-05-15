import styled from "styled-components";

const Card = styled.View`
  background-color: ${({ theme }) =>
    theme.theme !== "light" ? theme.gray6 : "white"};
  shadow-opacity: 0.1;
  shadow-radius: 5px;
  shadow-color: ${({ theme }) => theme.fontColor};
  padding-top: 25px;
  padding-bottom: 10px;
  padding-horizontal: 25px;
  shadow-offset: 0px 4px;
  margin-left: 25px;
  margin-right: ${({ isAccountScroll }) => (isAccountScroll ? "0px" : "25px")}
  margin-top: 12.5px;
  margin-bottom: 12.5px;
  border-radius: 17px;
`;

export { Card };

// height: 265px;
// shadowOpacity: 0.1,
// shadowRadius: 5,
// shadowOffset: {
//   width: 0,
//   height: 4,
// },
