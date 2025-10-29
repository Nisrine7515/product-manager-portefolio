import "./Footer.css";
import ContactModal from "./ContactModal";
import { useState } from "react";

const Footer = () => {
  const [open, setOpen] = useState(false);
  return (
    <footer className="footer">
      <button className="contact-me" onClick={() => setOpen(true)}>
        Click here to get in touch !
      </button>

      <ContactModal open={open} onClose={() => setOpen(false)} />
    </footer>
  );
};

export default Footer;
