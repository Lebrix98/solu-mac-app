// Data
import { infoVideo } from "../../data/infoVideo";
// Styles
import "./styles.css";
// Texts
import { recomendacionesTexts } from "./text";
// Assets
import { Youtube } from "../../assets/assets";
import useDevice from "../../hooks/useDevice";

const Recomendaciones = () => {

  const { isDesktop } = useDevice()

  return (
    <div className="recomend_container">
      <div className="title_recomend">
        <h1>{recomendacionesTexts.TITLE}</h1>
      </div>
      <div className="videos_content">
        {infoVideo.map(({id, src}) => (
          <iframe
            key={id}
            src={src}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        ))}
      </div>
      <div className="recomend_button">
        <a href="https://www.youtube.com/@solucionesMAC" target="_blank">
          <img src={Youtube} alt="Youtube" />
          {
            isDesktop && <p>Siguenos en nuestro canal de Youtube</p>
          }
        </a>
      </div>
    </div>
  );
};

export default Recomendaciones;
