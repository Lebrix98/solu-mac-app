// Image
import brain from "../../assets/brain_icon.png";
// Styles
import "./styles.css";
// Texts
import { experienciasText } from "./text";

const Experiencia = () => {
  return (
    <div className="exp">
      <div className="exp__container">
        <div className="exp__title">
          <p>{experienciasText.SERVICE}</p>
          <h1>{experienciasText.TITLE}</h1>
          <h2>{experienciasText.EXP}</h2>
        </div>
        <div className="exp__img">
          <img src={brain} alt="Brain" />
        </div>
      </div>
    </div>
  );
};

export default Experiencia;
