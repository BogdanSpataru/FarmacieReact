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
  width: 80px;
  height: 40px;

  @media screen and (max-width: 820px) {
    display: flex;
  }
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

  @media screen and (max-width: 820px) {
    display: flex;
    justify-content: space-between;
    padding: 8px 10px;
  }
`;

export const LinkNavStyle = styled(Link)`
  text-decoration: none;
  min-width: 60px;
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
  @media screen and (max-width: 1320px) {
    padding: 2px 16px;
  }

  @media screen and (max-width: 820px) {
    display: none;
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
  color: black;
  background: none;
  display: none;
  padding: 0;
  margin: 0;
  border: none;
  right: 0;
  position: relative;

  &:hover {
    background: #4caf50;
  }

  @media screen and (max-width: 820px) {
    display: flex;
    justify-content: space-between;
    color: black;
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
    display: flex;
    padding: 0;
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
  color: black;

  @media screen and (max-width: 820px) {
    width: 40vw;
  }
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

  @media screen and (max-width: 820px) {
    display: none;
  }
`;
export const LinkNavCart = styled.div`
  position: absolute;
  top: 0;
  z-index: 10;
  background-color: red;
  color: white;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  width: 4px;
  height: 4px;
  font-size: small;
  justify-content: center;
  align-items: center;
  right: 0;

  @media screen and (max-width: 820px) {
    right: -10px;
  }
`;
export const LinkNavFav = styled.div`
  position: absolute;
  top: 0;
  z-index: 10;
  background-color: red;
  color: white;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  width: 4px;
  height: 4px;
  font-size: small;
  justify-content: center;
  align-items: center;
  right: 50%;
  @media screen and (max-width: 820px) {
    right: -6px;
  }
  @media screen and (min-width: 1320px) {
    right: 55%;
  }
  @media screen and (max-width: 1290px) {
    right: 45%;
  }
`;
export const DropdownContainerFav = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 10px;

  @media screen and (max-width: 820px) {
    left: -300px;
  }
  @media screen and (max-width: 1090px) and (min-width: 821px) {
    left: -90px;
  }
`;

export const DropdownItem = styled.div`
  padding: 8px 12px;
  color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    background-color: #f1f1f1;
    display: flex;
    flex-direction: row;
  }
`;

export const DropdownLink = styled(Link)`
  padding: 0;
  color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  position: relative;
  display: flex;
  margin-right: 5px;
  background-color: transparent;
`;
export const SuggestionsList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #ccc;
  z-index: 10;
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: 100;
`;

export const SuggestionItem = styled.li`
  padding: 8px;
  cursor: pointer;
  color: black;
  z-index: 100;
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const SuggestionImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  background-color: transparent;
`;

export const CartTotal = styled.div`
  display: flex;
  color: black;
  justify-content: space-between;
  font-weight: bold;
  padding: 10px 0;
  border-top: 1px solid #ddd;
`;

export const CartButton = styled.button`
  width: 100%;
  padding: 10px;
  background: green;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  &:hover {
    background: ${DARK_GREEN};
  }
`;

export const FavButton = styled.button`
  width: 100%;
  padding: 10px;
  background: red;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  &:hover {
    background: darkred;
  }
`;

export const CartIcon = styled.span`
  width: 50px;
`;

export const RemoveButton = styled.button`
  margin-left: 26px;
  background: none;
  border: none;
  color: red;
  font-size: 16px;
  cursor: pointer;
  align-self: center;

  &:hover {
    color: darkred;
  }
`;

export const CartLink = styled(Link)`
  width: 100%;
  text-decoration: none;
`;

export const QuantityButton = styled.button`
  background: none;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 2px;
  height: 18px;
  width: 18px;
  border: 1px solid #e0e0e0;
  padding: 4px 6px;
  cursor: pointer;
  font-size: 1.2em;
  z-index: 2;
  color: black;

  &:hover {
    background-color: grey;
  }
`;

export const CartSpanText = styled.span`
  width: 100px;
  margin-right: 5px;
  overflow: hidden;
`;
export const CartSpanNr = styled.span`
  width: 20px;
`;

export const CartSpanPrice = styled.span`
  width: 50px;
`;

export const SmallScreenCartButton = styled.button`
  display: none;

  @media screen and (max-width: 820px) {
    display: block;
    color: black;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    position: relative;
    margin: 0 5px;
  }
`;
