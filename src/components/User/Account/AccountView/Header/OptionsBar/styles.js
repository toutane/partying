import styled from "styled-components";

const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) =>
    theme.theme === "light" ? theme.gray4 : theme.gray5};
  border-radius: 10px;
  height: 30px;
  justify-content: center;
  align-items: center;
`;

export { Button };

// height: 265px;
