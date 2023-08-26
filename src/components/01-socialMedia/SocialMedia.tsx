// Styles
import {
  Correo,
  Facebook,
  Instagram,
  Twitter,
  WhatsApp,
} from "../../assets/assets";
import "./styles.css";

const SocialMedia = () => {
  return (
    <>
      <div className="socialMedia__container">
        <a href="https://web.facebook.com/solucionesmac.chile" target="_blank">
          <img
            className="socialMedia__Facebook"
            src={Facebook}
            alt="Facebook"
          />
        </a>
        <a href="https://twitter.com/solucionesmac2" target="_blank">
          <img className="socialMedia__Twitter" src={Twitter} alt="Twitter" />
        </a>
        <a href="https://www.instagram.com/solucionesmac/" target="_blank">
          <img
            className="socialMedia__Instagram"
            src={Instagram}
            alt="Instagram"
          />
        </a>
        <a href="mailto:contacto@solucionesmac.cl">
          <img className="socialMedia__Correo" src={Correo} alt="Correo" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=56991298170&text&type=phone_number&app_absent=0"
          target="_blank"
        >
          <img
            className="socialMedia__WhatsApp"
            src={WhatsApp}
            alt="WhatsApp"
          />
        </a>
      </div>
    </>
  );
};

export default SocialMedia;
