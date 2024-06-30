import { useState, useContext, useEffect, useRef } from "react";
import { ResposiveB, AlertB, OffcanvasB } from "./Navbar2.styled";
import { List, X } from "react-bootstrap-icons";
import { DropdownItem } from "./Navbar2.styled";

function ResponsiveButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (location.pathname === "/home" || location.pathname === "/") {
      setShow(false);
    } else {
      setShow(false);
    }
  }, [location.pathname]);

  return (
    <>
      <ResposiveB variant="primary" className="d-lg-none" onClick={handleShow}>
        <List size={30} />
      </ResposiveB>

      <AlertB variant="info" className="d-none d-lg-block">
        Resize your browser to show the responsive offcanvas toggle.
      </AlertB>

      <OffcanvasB show={show} onHide={handleClose} responsive="lg">
        <OffcanvasB.Header closeButton>
          <OffcanvasB.Title>PRODUSE</OffcanvasB.Title>
        </OffcanvasB.Header>
        <OffcanvasB.Body>
          <DropdownItem to="/farareteta">MEDICAMENTE FARA RETETA</DropdownItem>
          <DropdownItem to="/reteta">MEDICAMENTE CU RETETA</DropdownItem>
          <DropdownItem to="/dispozmed">DISPOZITIVE MEDICALE</DropdownItem>
          <DropdownItem to="/vitsupliment">VITAMINE SI SUPLIMENTE</DropdownItem>
          <DropdownItem to="/dermatocosm">DERMATO-COSMETICE</DropdownItem>
          <DropdownItem to="/ingrijpers">INGRIJIRE PERSONALA</DropdownItem>
          <DropdownItem to="/dietawellness">DIETA SI WELLNESS</DropdownItem>
          <DropdownItem to="/viatasex">VIATA SEXUALA</DropdownItem>
          <DropdownItem to="/produse">TOATE PRODUSELE</DropdownItem>
        </OffcanvasB.Body>
      </OffcanvasB>
    </>
  );
}

export default ResponsiveButton;
