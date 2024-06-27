import { FooterContainer } from "./Footer.style";

function Footer() {
  return (
    <FooterContainer>
      <div class="InformatiiClienti">
        <h3>Informatii Clienti</h3>
        <p>Termeni si Conditii de Utilizare</p>
        <p>Termeni si Conditii Card Cadou</p>
        <p>Cum Comand</p>
        <p>Farmacie cu laborator propriu</p>
        <p>Transport & Plata</p>
        <p>Returnare si Garantie</p>
        <p>Intrebari Frecvente</p>
        <p>Rechemare produse</p>
        <p>Contactati-ne</p>
      </div>
      <div class="InformatiiGenerale">
        <h3>Informatii Generale</h3>
        <p>Cariere</p>
        <p>Politica utilizare Cookie</p>
        <p>Politica confidentialitate date personale</p>
        <p>Avertizori de integritate</p>
        <p>Decontare dispozitive medicale CNAS</p>
        <p>Prospecte medicamente</p>
        <p>Ministerul Sanatatii</p>
        <p>Ministerul Sanatatii - ANMDM</p>
        <p>Ministerul Sanatatii - Contact</p>
        <p>ANPC - Protectia consumatorilor</p>
      </div>
      <div class="Farmacii">
        <h3>Farmacii</h3>
        <p>București</p>
        <p>Cluj-Napoca</p>
        <p>Timișoara</p>
        <p>Iași</p>
        <p>Constanța</p>
        <p>Craiova</p>
        <p>Brașov</p>
        <p>Galați</p>
        <p>Ploiești</p>
        <p>Oradea</p>
      </div>

      <div class="contact">
        <h3>Contact</h3>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-calendar-date"
            viewBox="0 0 16 16"
          >
            <path d="M6.445 11.688V6.354h-.633A13 13 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23" />
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
          </svg>
          Luni - Vineri: 08:00 - 20:00
        </p>
        <p>Sambata: 08:00 - 14:00</p>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-envelope"
            viewBox="0 0 16 16"
          >
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
          </svg>
          comenzi@farmacia.ro
        </p>
      </div>
    </FooterContainer>
  );
}

export default Footer;
