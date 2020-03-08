import styled from "styled-components";

const TouchableOpacity = styled.TouchableOpacity`
  border-radius: 13px;
  height: 45px;
  width: 45px;
  background-color: ${({ theme, isWhiteBackground }) =>
    isWhiteBackground !== undefined
      ? theme.backgroundColor
      : theme.theme !== "light"
      ? theme.gray6
      : "white"};
  shadow-opacity: 0.03;
  shadow-radius: 20px;
  shadow-color: ${({ theme }) => theme.fontColor};
  justify-content: center;
  align-items: center;
`;

export { TouchableOpacity };
