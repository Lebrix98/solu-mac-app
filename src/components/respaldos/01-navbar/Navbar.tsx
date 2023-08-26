// Images
import {
  Logo,
  Facebook,
  Instagram,
  Twitter,
  Correo,
  WhatsApp,
} from "../../../assets/assets";

// Styles
import "./styles.css";

// Texts
import { navbarText } from "./text";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__title">
        <img src={Logo} alt="SolucionesMac_Logo" />
        <p>{navbarText.TITLE}</p>
      </div>
      <div className="navbar__media">
        <a href="https://web.facebook.com/solucionesmac.chile" target="_blank">
          <img src={Facebook} alt="Facebook" />
        </a>
        <a href="https://twitter.com/solucionesmac2" target="_blank">
          <img src={Twitter} alt="Twitter" />
        </a>
        <a href="https://www.instagram.com/solucionesmac/" target="_blank">
          <img src={Instagram} alt="Instagram" />
        </a>
        <a href="mailto:contacto@solucionesmac.cl">
          <img src={Correo} alt="Correo" />
        </a>
        <a href="https://api.whatsapp.com/send/?phone=56991298170&text&type=phone_number&app_absent=0" target="_blank">
          <img src={WhatsApp} alt="WhatsApp" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
