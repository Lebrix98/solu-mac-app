// Data
import { infoVideo } from "../../data/infoVideo";
// Styles
import "./styles.css";
// Texts
import { recomendacionesTexts } from "./text";

const Recomendaciones = () => {
  return (
    <div className="recomend_container">
      <div className="title_recomend">
        <h1>{recomendacionesTexts.TITLE}</h1>
      </div>
      <div className="videos_content">
        {infoVideo.map((e) => (
          <iframe
            key={e.id}
            src={e.src}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        ))}
      </div>
    </div>
  );
};

export default Recomendaciones;