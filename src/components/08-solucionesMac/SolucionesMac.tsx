//Styles
import './styles.css';
// Texts
import { solucionesMacTexts } from './text';
// Image
import { MacImg } from '../../assets/assets';

const SolucionesMac = () => {
  return (
    <div className='soluMac__container'>
      <div className='soluMac__content'>
        <div className='soluMac__text'>
            <h1>{ solucionesMacTexts.QUESTION }</h1>
            <p>{ solucionesMacTexts.VALUE }</p>
        </div>
        <div className='soluMac__image'>
            <img src={MacImg} alt="MacIMG" />
        </div>
      </div>
    </div>
  )
}

export default SolucionesMac
