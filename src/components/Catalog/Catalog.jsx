import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card.jsx';
import s from './Catalog.module.css';
import { selectCampers } from '../../redux/campers/selectors.js';
import { fetchCampers } from '../../redux/campers/operations.js';
import { useEffect } from 'react';

const Catalog = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const camperItems = campers.items || [];

  return (
    <div>
      <ul className={s.list}>
        {camperItems.map((camper) => {
          return (
            <li className={s.item} key={camper.id}>
              <Card camper={camper} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Catalog;
