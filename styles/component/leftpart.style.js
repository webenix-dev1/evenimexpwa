import styled, { css } from "styled-components";
import theme from "../global/theme";
import { NavLink } from "../global/main.style";
import { mediaQueries } from "../../utils/mediaQuery";
export const LeftPartMain = styled.div`
  height: 100%;
  width: 100%;
  max-width: 50%;
  border-right: 1px solid ${theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
export const LogoMain = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const NavBarLogo = styled.div`
  cursor: pointer;
  width: 240px;
  height: auto;
  overflow: hidden;
  margin: 0 auto;
  text-align: center;
  ${mediaQueries("md")`
        width: 180px;
    `}
  ${mediaQueries("sm")`
         width: 140px;
    `}

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    object-position: center;
  }
`;
export const RegisterText = styled.h1`
  font-size: 24px;
  color: ${theme.color.white};
  text-align: center;
  line-height: 26px;
  padding: 0 70px;
  margin: 6px 0;
  font-weight: 600;

  ${mediaQueries("md")`
        padding: 0 40px;
        font-size: 20px;
        color: ${theme.color.white};
        text-align: center;
        line-height: 22px;
    `}
  ${mediaQueries("sm")`
        padding: 0 20px;
        font-size: 18px;
        color: ${theme.color.white};
        text-align: center;
        line-height: 20px;
    `}
`;
