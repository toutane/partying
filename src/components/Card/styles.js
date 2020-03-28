import styled from "styled-components";

const Card = styled.View`
  background-color: ${({ theme }) =>
    theme.theme !== "light" ? theme.gray6 : "white"};
  shadow-opacity: 0.07;
  shadow-radius: 20px;
  shadow-color: ${({ theme }) => theme.fontColor};
  padding-vertical: 20px;
  padding-horizontal: 20px;
  border-radius: 17px;
`;

export { Card };

// height: 265px;
