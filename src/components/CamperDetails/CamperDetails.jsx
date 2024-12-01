import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import s from './CamperDetails.module.css';
import sprite from '../../assets/icons.svg';
import { selectCamperById } from '../../redux/campers/selectors.js';
import { useEffect } from 'react';
import { fetchCamperById } from '../../redux/campers/operations.js';

const CamperDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectCamperById);

  useEffect(() => {
    if (id) {
      dispatch(fetchCamperById(String(id)));
    }
  }, [dispatch, id]);

  if (!camper || Object.keys(camper).length === 0) {
    return <div>Loading camper details...</div>;
  }

  const formattedPrice = (price) => `€ ${price.toFixed(2)}`;

  const formattedLocation = (location) => {
    const [country, city] = location.split(',');
    return `${city}, ${country}`;
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>{camper.name}</h2>

      <div className={s.wrapDetails}>
        <Link to={`/catalog/${camper.id}/reviews`}>
          <p className={s.rating}>
            <svg width={16} height={16}>
              <use href={`${sprite}#icon-rating-yellow`}></use>
            </svg>
            {camper.rating}
            <span>({camper.reviews.length} Reviews)</span>
          </p>
        </Link>

        <p className={s.location}>
          <svg width={16} height={16}>
            <use href={`${sprite}#icon-map`}></use>
          </svg>
          {formattedLocation(camper.location)}
        </p>
      </div>

      <h2 className={s.price}>{formattedPrice(camper.price)}</h2>

      <ul className={s.list}>
        {camper.gallery.map((image, index) => (
          <li className={s.item} key={index}>
            <img src={image.original} alt={`${camper.name} ${index + 1}`} />
          </li>
        ))}
      </ul>

      <p className={s.descrText}>{camper.description}</p>
    </div>
  );
};

export default CamperDetails;
