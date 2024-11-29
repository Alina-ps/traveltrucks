import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card.jsx';
import s from './Catalog.module.css';
import {
  selectCampers,
  selectLimit,
  selectPage,
  selectTotal,
} from '../../redux/campers/selectors.js';
import { fetchCampers } from '../../redux/campers/operations.js';
import { useEffect } from 'react';
import { setPage } from '../../redux/campers/slice.js';

const Catalog = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);
  const total = useSelector(selectTotal);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const totalPages = Math.ceil(total / limit);

  const campersToShow = page * limit;
  const currentCampers = campers.slice(0, campersToShow);

  const handleLoadMore = () => {
    if (page < totalPages) {
      dispatch(setPage(page + 1));
    }
  };

  return (
    <div>
      <ul className={s.list}>
        {currentCampers.map((camper) => {
          return (
            <li className={s.item} key={camper.id}>
              <Card camper={camper} />
            </li>
          );
        })}
      </ul>
      {page < totalPages && (
        <button className={s.btn} onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default Catalog;
