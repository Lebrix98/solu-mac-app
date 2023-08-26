// Styles
import "./styles.css";
// Texts
import { garantizadosTexts } from "./text";

const TrabajosGarantizados = () => {
  return (
    <div className="work">
      <div className="work__container">
        <div className="work__works">
          <h1>{garantizadosTexts.FIRST_TITLE}</h1>
        </div>
        <div className="work__service">
          <h1>{garantizadosTexts.SECOND_TITLE}</h1>
          <p>{garantizadosTexts.HISTORY}</p>
        </div>
      </div>
    </div>
  );
};

export default TrabajosGarantizados;
