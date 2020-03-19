import styled from "styled-components";

const TopViewCard = styled.View`
  padding-horizontal: 25px;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
  background-color: ${({ theme }) =>
    theme.theme !== "light" ? theme.gray6 : "white"};
  shadow-opacity: ${({ theme }) => (theme.theme === "light" ? 0.05 : 0.3)};
  shadow-radius: 10px;
  shadow-color: ${({ theme }) =>
    theme.theme === "light" ? theme.fontColor : "black"};
  shadow-offset: 0px 10px;
  padding-bottom: 40px;
`;

export { TopViewCard };
