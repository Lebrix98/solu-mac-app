// Styles
import "./styles.css";

const Multimedia = () => {
  return (
    <video className="videoSolu" loop muted autoPlay>
      <source
        src="http://www.solucionesmac.cl/wp-content/uploads/2023/07/SolucionesMac-Publi-redes-1080P-vimeo.mp4"
        type="video/mp4"
      />
    </video>
  );
};

export default Multimedia;
