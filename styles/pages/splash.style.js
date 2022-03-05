import styled, { css } from "styled-components";
import theme from "../global/theme";
import { mediaQueries } from "../../utils/mediaQuery";
export const SplashMain = styled.div`
  height: 100vh;
  width: 100%;
  flex-direction: center;
  align-items: center;
  display: flex;
  background: linear-gradient(
    180deg,
    ${theme.color.gredientFirst},
    ${theme.color.gredientSecond}
  );
`;
export const NavBarLogo = styled.div`
  cursor: pointer;
  width: 280px;
  height: auto;
  overflow: hidden;
  margin: 0 auto;
  text-align: center;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    object-position: center;
  }
`;
