import styled, { css } from "styled-components";
import theme from "../global/theme";
import { NavLink } from "../global/main.style";
import { mediaQueries } from "../../utils/mediaQuery";
export const RightPartMain = styled.div`
  height: 100%;
  width: 100%;
  max-width: 50%;
  overflow: hidden;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SignUpSelectionOptionMain = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 15px 45px;
  width: 100%;
`;
export const SignUpSelectionOptions = styled.li`
  background: ${theme.color.white};
  border-radius: 37px;
  padding: 20px 12px;
  margin: 15px 0;
  font-size: 16px;
  color: ${theme.color.TextMainColor};
  text-align: left;
  font-family: "Gothic A1", sans-serif;
  font-weight: 500;

  ${(props) =>
    props.isActiveSelection &&
    css`
      background: ${theme.color.ButtonBgColorOne};
    `}
  a {
    font-size: 16px;
    color: ${theme.color.TextMainColor};
    text-align: left;
  }
`;
