import styled, { css } from "styled-components";
import theme from "../global/theme";

// header section css file start//
export const HeaderBarMain = styled.div`
  padding: 15px 0;
  background: ${theme.color.white};
  right: 0;
  left: 0;
  top: 0;
  z-index: 1;
  border-bottom: 1px solid ${theme.color.border};
  &.boat-header-bar {
    background: rgb(0 0 0 / 28%);
    border: 1px solid #979797;
    position: absolute;
    ul {
      li {
        a {
          color: ${theme.color.white};
        }
      }
    }
  }
`;
export const NavBarMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const NavLogoandFilterBar = styled.div`
  display: inline-flex;
  form {
    margin-left: 15px;
    .search-and-miles-filter {
      display: inline-flex;
      .form-main-cover-block {
        margin-bottom: 0px;
      }
      .yoyo-radius-form {
        width: 220px;
        margin-left: 15px;
      }
    }
  }
`;
export const NavBarLogo = styled.div`
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  width: 123px;
  height: auto;
  display: inline-flex;
  overflow: hidden;
  &:hover {
    opacity: 0.8;
  }
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    object-position: center;
  }
`;

export const NavMenuListMain = styled.div`
  flex: 1;
  margin-left: 20px;
`;
export const DashboardHeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  ul {
    &:last-child {
      li {
        &:last-child {
          margin-right: 0px;
        }
      }
    }
  }
  ${(props) =>
    props.isLandingPageHeader &&
    css`
      justify-content: flex-end;
    `}
`;
export const MenuUL = styled.ul`
  display: inline-flex;
  align-items: center;
`;
export const MenuLI = styled.li`
  margin: 0px 15px;
  display: flex;
  align-items: center;
  ${(props) =>
    props.isProfileIcon &&
    css`
      flex-direction: column;
      position: relative;
    `}
`;

export const DropdownMenu = styled.div`
  background: ${theme.color.white};
  box-shadow: 0 2px 48px 0 rgb(0 0 0 / 6%);
  border-radius: 4px;
  position: absolute;
  top: 60px;
  right: 0;
  border: 1px solid #d4dae3;
  width: 100%;
  min-width: 160px;
  display: inline-flex;
  flex-direction: column;
  overflow: hidden;
`;

export const SupportWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
  a {
    font-size: 15px;
    color: ${theme.color.lightblack};
    font-weight: normal;
    ${"" /* font-family: ${theme.font.fontFamilyCircularStdBook}; */}
  }
`;
export const SupportText = styled.h5`
  font-size: 12px;
  color: #5e6874;
  font-weight: normal;
  font-family: ${theme.font.fontFamilyCircularStdBook};
`;
// header section css file end//
