// Styles
import "./styles.css";
// Data
import { socialMediaList } from "../../data/socialMediaList";

const SocialMedia = () => {
  return (
    <>
      <div className="socialMedia__container">

        {
          socialMediaList.map( ({id,href, src, alt}) => (

            <a key={id} href={href} target="_blank">
            <img src={src} alt={alt} />
            </a>

          ) )
        }

      </div>
    </>
  );
};

export default SocialMedia;
