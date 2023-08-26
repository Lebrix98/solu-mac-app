// Styles
import "./styles.css";
// Texts
import { reparacionesTexts } from "./text";

const Reparacion = () => {
  return (
    <div className="fixed__container">
      <div className="fixed__content">
        <div className="fixed__text">
          <h1>{reparacionesTexts.TITLE}</h1>
          <p>{reparacionesTexts.SERVICES}</p>
        </div>
      </div>
    </div>
  );
};

export default Reparacion;
