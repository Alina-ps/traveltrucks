import { useDispatch, useSelector } from 'react-redux';
import {
  selectCamperById,
  selectIsLoading,
} from '../../redux/campers/selectors';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchCamperById } from '../../redux/campers/operations';
import s from './Reviews.module.css';
import sprite from '../../assets/icons.svg';
import Loader from '../Loader/Loader';

const Reviews = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectCamperById);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (id) {
      dispatch(fetchCamperById(id));
    }
  }, [dispatch, id]);

  if (!camper || Object.keys(camper).length === 0) {
    return <div>Loading camper details...</div>;
  }

  const formatName = (value) => {
    const splittedValue = value.split('');
    const newValue = splittedValue[0];
    return newValue;
  };

  const renderStars = (rating) => {
    const stars = [];
    const total = 5;

    for (let i = 1; i <= total; i++) {
      stars.push(
        <span key={i}>
          <svg width={16} height={16}>
            <use
              href={`${sprite}#icon-rating-${i <= rating ? 'yellow' : 'gray'}`}
            ></use>
          </svg>
        </span>
      );
    }
    return stars;
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className={s.container}>
      <ul className={s.list}>
        {camper.reviews.map((review, index) => (
          <li className={s.item} key={index}>
            <div className={s.itemWrap}>
              <span className={s.itemSpan}>
                {formatName(review.reviewer_name)}
              </span>
              <div>
                <p className={s.itemName}>{review.reviewer_name}</p>
                <p className={s.itemRating}>
                  {renderStars(review.reviewer_rating)}
                </p>
              </div>
            </div>

            <p className={s.itemComment}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
