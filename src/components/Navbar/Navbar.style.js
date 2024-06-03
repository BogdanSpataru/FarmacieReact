import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  DARK_GRAY,
  DARK_GREEN,
  RED_ORANGE,
  WHITE_NEUTRAL,
} from "../../constants/color";

export const Title = styled.h1`
  color: ${WHITE_NEUTRAL};
`;

export const LogoContainer = styled(Link)`
  display: inline-block;
`;

export const Logo = styled.img`
  width: 100px;
  height: 40px;
`;

export const NavbarContainer = styled.div`
  display: flex;
  position: sticky;
  justify-content: center;
  flex-direction: row;
  text-align: center;
  vertical-align: middle;
  background: whitesmoke;
  color: white;
  max-height: 56px;
  padding: 8px 250px;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid gray;
`;

export const LinkNavStyle = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: black;
  padding: 8px 16px;
  margin: 0;
  border-radius: 4px;
  right: 0;

  &:hover {
    background: #4caf50;
    color: ${WHITE_NEUTRAL};
    border-radius: 0;
  }

  @media screen and (max-width: 820px) {
    color: ${DARK_GREEN};
  }
`;

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: ${WHITE_NEUTRAL};
  color: ${DARK_GREEN};
  width: 200px;
  position: absolute;
  top: 56px;
  right: 0;
  display: none;
  border-radius: 8px;

  @media screen and (max-width: 820px) {
    display: block;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  color: ${DARK_GRAY};
  width: 100%;
`;

export const LinkContainerDesktop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: relative;

  @media screen and (max-width: 820px) {
    display: none;
  }
`;

export const ButtonDropdown = styled.button`
  width: 40px;
  height: 40px;
  color: ${WHITE_NEUTRAL};
  background: none;
  display: none;
  padding: 0;
  margin: 0;
  border: none;
  right: 0;
  position: relative;

  &:hover {
    background: ${DARK_GREEN};
  }

  @media screen and (max-width: 820px) {
    display: block;
  }
`;

export const NewButton = styled(ButtonDropdown)`
  color: ${RED_ORANGE};
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  padding-left: 60px;

  @media screen and (max-width: 820px) {
    display: none;
  }
`;

export const Input = styled.input`
  padding: 10px;
  background-color: whitesmoke;
  font-size: 16px;
  border: 4px solid #ccc;
  border-radius: 8px;
  width: 28vw;
  margin-right: 10px;
`;

export const ButtonS = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: ${DARK_GREEN};
    color: ${WHITE_NEUTRAL};
    border-radius: 8px;
  }
`;
