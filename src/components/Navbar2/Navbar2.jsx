import { useState, useContext, useEffect, useRef } from "react";
import {
  Nav,
  NavContainer,
  ProdContainer,
  ProdButton,
  ProdDropdown,
  DropdownItem,
  NavLinks,
  NavLink,
} from "./Navbar2.styled";
import { ButtonDropdown } from "../Navbar/Navbar.style";
import { List, X } from "react-bootstrap-icons";
import { useLocation } from "react-router-dom";
import ResponsiveButton from "./Offcanvas";

function Navbar2() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (location.pathname === "/home" || location.pathname === "/") {
      setIsDropdownVisible(true);
    } else {
      setIsDropdownVisible(false);
    }
  }, [location.pathname]);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Nav>
      <NavContainer>
        <ProdContainer ref={dropdownRef}>
          <ResponsiveButton></ResponsiveButton>
          <ProdButton onClick={toggleDropdown}>&#9776; Produse</ProdButton>
          <ProdDropdown isVisible={isDropdownVisible}>
            <DropdownItem to="/farareteta">
              MEDICAMENTE FARA RETETA
            </DropdownItem>
            <DropdownItem to="/reteta">MEDICAMENTE CU RETETA</DropdownItem>
            <DropdownItem to="/dispozmed">DISPOZITIVE MEDICALE</DropdownItem>
            <DropdownItem to="/vitsupliment">
              VITAMINE SI SUPLIMENTE
            </DropdownItem>
            <DropdownItem to="/dermatocosm">DERMATO-COSMETICE</DropdownItem>
            <DropdownItem to="/ingrijpers">INGRIJIRE PERSONALA</DropdownItem>
            <DropdownItem to="/dietawellness">DIETA SI WELLNESS</DropdownItem>
            <DropdownItem to="/viatasex">VIATA SEXUALA</DropdownItem>
            <DropdownItem to="/produse">TOATE PRODUSELE</DropdownItem>
          </ProdDropdown>
        </ProdContainer>
        <NavLinks>
          <NavLink to="/noutati">Noutăți</NavLink>
          <NavLink to="/promotii">Promotii</NavLink>
          <NavLink to="/trend">In trend</NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}
export default Navbar2;
