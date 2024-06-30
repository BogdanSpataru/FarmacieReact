import { Link } from "react-router-dom";
import styled from "styled-components";
import { DARK_GREEN } from "../../constants/color";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export const Nav = styled.nav`
  background-color: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ddd;
`;
export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 246px;
  width: 100%;
  height: 45px;
  @media screen and (max-width: 820px) {
    display: flex;
    justify-content: flex-start;
    padding-left: 10px;
  }
`;

export const ProdContainer = styled.div`
  position: relative;
`;

export const ProdButton = styled(Link)`
  background-color: #4caf50;
  width: 16vw;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 820px) {
    display: none;
  }

  &:hover {
    background: ${DARK_GREEN};
  }
`;

export const ProdDropdown = styled.div`
  display: ${(props) => (props.isVisible ? "block" : "none")};
  flex-direction: column;
  position: absolute;
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
  padding: 10px;
  width: 17vw;
  z-index: 2;
  min-width: 220px;
  @media screen and (max-width: 825px) {
    display: none;
  }
`;

export const DropdownItem = styled(Link)`
  background: none;
  width: 15vw;
  color: black;
  padding: 13.5px 20px;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #ddd;
  }
  @media (max-width: 825px) {
    width: 100%;
  }
`;

export const NavLinks = styled.div`
  display: flex;
`;

export const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  padding: 0 15px;
  line-height: 40px;

  &:hover {
    color: #007bff;
  }

  @media (max-width: 825px) {
    display: none;
  }
`;

export const CarouselContainerB = styled.div`
  width: 60vw;
  justify-content: center;
  display: flex-end;
  margin-left: 390px;

  @media (max-width: 825px) {
    padding: 0px 20px;
    margin-left: 0;
    width: auto;
  }
`;

export const ContainerTable = styled.div`
  width: 52.1vw;
  height: 25vh;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  right: 17%;
`;

export const ResposiveB = styled(Button)`
  display: none;
  background: none;
  border: none;
  color: #000;
  &:hover {
    background: #4caf50;
  }
  @media screen and (max-width: 820px) {
    display: flex;
  }
`;

export const AlertB = styled(Alert)`
  margin: 10px 0;
  display: none !important;
  color: #007bff;
  @media screen and (max-width: 820px) {
    display: flex;
  }
`;

export const OffcanvasB = styled(Offcanvas)`
  width: 250px;
  display: none;

  @media screen and (max-width: 820px) {
    display: flex;
  }

  .offcanvas-header {
    background-color: #007bff;
    color: white;
  }
  .offcanvas-body {
    padding: 20px;
  }
`;
