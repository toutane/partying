import styled from "styled-components";

const Card = styled.View`
  background-color: ${({ theme }) =>
    theme.theme !== "light" ? theme.gray6 : "white"};
  shadow-opacity: 0.03;
  shadow-radius: 20px;
  shadow-color: ${({ theme }) => theme.fontColor};
  padding-top: 25px;
  padding-bottom: 10px;
  padding-horizontal: 25px;
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 12.5px;
  margin-bottom: 12.5px;
  border-radius: 17px;
`;

export { Card };

// height: 265px;
