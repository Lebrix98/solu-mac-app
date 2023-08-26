//Styles
import "./styles.css";
// Texts
import { informacionTexts } from "./text";
// Image
import { MacInfo } from "../../assets/assets";

const Informacion = () => {
  return (
    <div className="informacion__container">
      <div className="informacion__content">
        <div className="informacion__image">
          <img src={MacInfo} alt="MacInfo" />
        </div>
        <div className="informacion__text">
          <h2>{informacionTexts.CONFIRM}</h2>
          <h1>{informacionTexts.WELOCATE}</h1>
          <p>{informacionTexts.DIRECCTION}</p>
          <p>{informacionTexts.CONTACT}</p>
          <p>{informacionTexts.PHONE}</p>
        </div>
      </div>
    </div>
  );
};

export default Informacion;
