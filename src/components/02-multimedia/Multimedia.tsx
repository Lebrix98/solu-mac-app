// Styles
import "./styles.css";

import Video from '../../videos/SolucionesMacPublicidad.mp4'

const Multimedia = () => {
  const url = Video

  return (
    <>
      <video className="videoSolu" loop muted autoPlay>
      <source src={url} type="video/mp4" />
      </video>
    </>
  );
};

export default Multimedia;
