// Assets
import { Eye } from "../../assets/assets";
// Styles
import "./styles.css";
// Texts
import { hardSoftTexts } from "./text";

const HardSoft = () => {
  return (
    <div className="hardSoft__container">
      <div className="hardSoft__content">
        <div className="hardSoft__text">
          <h1>{hardSoftTexts.APPLE}</h1>
          <h2>{hardSoftTexts.TITLE}</h2>
          <p>{hardSoftTexts.NEED}</p>
        </div>
        <div className={`hardSoft__image`}>
          <img src={Eye} alt="Giant_Eye" />
        </div>
      </div>
    </div>
  );
};

export default HardSoft;
