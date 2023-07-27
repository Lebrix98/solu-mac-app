// Images
import facebook from "../../assets/facebook_icon.svg";
import instagram from "../../assets/instagram_icon.svg";
import twitter from "../../assets/twitter_icon.svg";
import logo from "../../assets/icon-solu.jpg";

// Styles
import './styles.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__title">
        <img
          src={logo}
          alt="SolucionesMac_Logo"
        />
        <p>Soluciones Mac</p>
      </div>
      <div className="navbar__media">
        <a href="https://web.facebook.com/solucionesmac.chile" target="_blank">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="https://twitter.com/solucionesmac2" target="_blank">
          <img src={twitter} alt="Twitter" />
        </a>
        <a href="https://www.instagram.com/solucionesmac/" target="_blank">
          <img src={instagram} alt="Instagram" />
        </a>
      </div>
    </div>
  )
}

export default Navbar
