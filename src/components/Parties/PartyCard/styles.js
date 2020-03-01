import styled from "styled-components";

const Card = styled.View`
  background-color: ${({ theme }) =>
    theme.theme !== "light" ? theme.gray7 : "white"};
  shadow-opacity: 0.02;
  shadow-radius: 20px;
  shadow-color: ${({ theme }) => theme.fontColor};
  padding-vertical: 30px;
  padding-horizontal: 25px;
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 17px;
  height: 250px;
`;

export { Card };
