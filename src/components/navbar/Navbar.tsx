// Images
import {Logo,Facebook,Instagram,Twitter, Correo} from '../../assets/assets'

// Styles
import './styles.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__title">
        <img
          src={Logo}
          alt="SolucionesMac_Logo"
        />
        <p>Soluciones Mac</p>
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
      </div>
    </div>
  )
}

export default Navbar
