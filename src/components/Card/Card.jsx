import s from './Card.module.css';
import sprite from '../../assets/icons.svg';
import { Link } from 'react-router-dom';

const Card = ({ camper }) => {
  let transmissionInfo;
  switch (camper.transmission) {
    case 'automatic':
      transmissionInfo = 'Automatic';
      break;
    case 'manual':
      transmissionInfo = 'Manual';
      break;
    case 'hybrid':
      transmissionInfo = 'Hybrid';
      break;
    default:
      transmissionInfo = 'Transmission not available';
  }

  let engineInfo;
  switch (camper.engine) {
    case 'petrol':
      engineInfo = 'Petrol';
      break;
    case 'diesel':
      engineInfo = 'Diesel';
      break;
    case 'hybrid':
      engineInfo = 'Hybrid';
      break;
    default:
      engineInfo = 'Engine not available';
  }

  const formattedPrice = (price) => `€ ${price.toFixed(2)}`;

  const formattedLocation = (location) => {
    const [country, city] = location.split(',');
    return `${city}, ${country}`;
  };

  return (
    <div className={s.container}>
      <img
        className={s.img}
        src={camper.gallery[0].original}
        alt={camper.name}
      ></img>

      <div className={s.descrWrap}>
        <div className={s.wrapTitle}>
          <h2>{camper.name}</h2>
          <h2 className={s.price}>
            {formattedPrice(camper.price)}
            <svg width={26} height={24}>
              <use href={`${sprite}#icon-heart`}></use>
            </svg>
          </h2>
        </div>

        <div className={s.wrapDetails}>
          <p className={s.rating}>
            <svg width={16} height={16}>
              <use href={`${sprite}#icon-rating`}></use>
            </svg>
            {camper.rating}
            <span>({camper.reviews.length} Reviews)</span>
          </p>
          <p className={s.location}>
            <svg width={16} height={16}>
              <use href={`${sprite}#icon-map`}></use>
            </svg>
            {formattedLocation(camper.location)}
          </p>
        </div>

        <p className={s.descrText}>{camper.description}</p>

        <ul className={s.list}>
          <li className={s.item}>
            <svg width={20} height={20}>
              <use href={`${sprite}#icon-diagram`}></use>
            </svg>
            {transmissionInfo}
          </li>
          <li className={s.item}>
            <svg width={20} height={20}>
              <use href={`${sprite}#icon-engine`}></use>
            </svg>
            {engineInfo}
          </li>
          {camper.kitchen && (
            <li className={s.item}>
              <svg width={20} height={20}>
                <use href={`${sprite}#icon-cup-hot`}></use>
              </svg>
              Kitchen
            </li>
          )}
          {camper.AC && (
            <li className={s.item}>
              <svg width={20} height={20}>
                <use href={`${sprite}#icon-wind`}></use>
              </svg>
              AC
            </li>
          )}
        </ul>
        <Link to={`/catalog/${camper.id}`}>
          <button>Show More</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
