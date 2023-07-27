// Image
import brain from "../../assets/brain_icon.png";

// Styles
import "./styles.css";

const Experiencia = () => {
  return (
    <div className="exp">
      <div className="exp__container">
        <div className="exp__title">
          <p>SERVICIO TÉCNICO PARA EQUIPOS APPLE</p>
          <h1>Soluciones Mac</h1>
          <h2>Somos la mejor alternativa con más de 20 años de experiencia</h2>
        </div>
        <div className="exp__img">
          <img src={brain} alt="Brain" />
        </div>
      </div>
    </div>
  );
};

export default Experiencia;
