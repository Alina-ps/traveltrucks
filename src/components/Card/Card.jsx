import s from './Card.module.css';
import sprite from '../../assets/icons.svg';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/campers/selectors';
import Loader from '../Loader/Loader.jsx';

const Card = ({ camper }) => {
  const isLoading = useSelector(selectIsLoading);

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
      break;
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
      break;
  }

  const formIcons = {
    fullyIntegrated: `${sprite}#icon-grid`,
    alcove: `${sprite}#icon-grid-3x3`,
    panelTruck: `${sprite}#icon-grid-1x2`,
  };

  let formInfo;
  switch (camper.form) {
    case 'fullyIntegrated':
      formInfo = 'Fully Integrated';
      break;
    case 'alcove':
      formInfo = 'Alcove';
      break;
    case 'panelTruck':
      formInfo = 'Panel Truck';
      break;
    default:
      break;
  }

  const formattedPrice = (price) => `€ ${price.toFixed(2)}`;

  const formattedLocation = (location) => {
    const [country, city] = location.split(',');
    return `${city}, ${country}`;
  };

  return isLoading ? (
    <Loader />
  ) : (
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
          <span
            className={s.rating}
            onClick={() =>
              window.open(`/catalog/${camper.id}/reviews`, '_blank')
            }
          >
            <svg width={16} height={16}>
              <use href={`${sprite}#icon-rating-yellow`}></use>
            </svg>
            {camper.rating}
            <span>({camper.reviews.length} Reviews)</span>
          </span>

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
          <li className={s.item}>
            <svg width={20} height={20}>
              <use href={formIcons[camper.form]}></use>
            </svg>
            {formInfo}
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
          {camper.TV && (
            <li className={s.item}>
              <svg width={20} height={20}>
                <use href={`${sprite}#icon-tv`}></use>
              </svg>
              TV
            </li>
          )}
          {camper.bathroom && (
            <li className={s.item}>
              <svg width={20} height={20}>
                <use href={`${sprite}#icon-shower`}></use>
              </svg>
              Bathroom
            </li>
          )}
        </ul>

        <button
          onClick={() =>
            window.open(`/catalog/${camper.id}/features`, '_blank')
          }
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default Card;
