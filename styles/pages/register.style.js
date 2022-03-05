import styled, { css } from "styled-components";
import theme from "../global/theme";
import { mediaQueries } from "../../utils/mediaQuery";
export const SignupPartMain = styled.div`
  height: 100vh;
  width: 100%;
  background: linear-gradient(
    180deg,
    ${theme.color.gredientSecond},
    ${theme.color.gredientFirst}
  );
  display: flex;
  justify-content: center;
`;
export const SignupPartWrapper = styled.div`
  height: auto;
  width: 100%;
  max-width: 920px;
  margin: 95px auto;
  background: linear-gradient(
    180deg,
    ${theme.color.gredientFirst},
    ${theme.color.gredientSecond}
  );
  border-radius: 15px;
  box-shadow: -2px 6px 15px 0 rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  ${mediaQueries("lg")`
      max-width: 640px;
    `}
  ${mediaQueries("md")`
       max-width: 100%;
       margin: 0;
    `}
`;
