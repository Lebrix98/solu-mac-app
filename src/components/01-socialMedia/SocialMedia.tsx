// Styles
import "./styles.css";
// Data
import { socialMediaList } from "../../data/socialMediaList";

const SocialMedia = () => {
  return (
    <>
      <div className="socialMedia__container">

        {
          socialMediaList.map( (media) => (

            <a key={media.id} href={media.href} target="_blank">
            <img src={media.src} alt={media.alt} />
            </a>

          ) )
        }

      </div>
    </>
  );
};

export default SocialMedia;
