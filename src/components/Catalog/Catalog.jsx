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
import {
  selectAC,
  selectBathroom,
  selectKitchen,
  selectLocationFilter,
  selectTransmission,
  selectTV,
  selectVehicleType,
} from '../../redux/filter/selectors.js';

const Catalog = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);
  const total = useSelector(selectTotal);
  const filterLocation = useSelector(selectLocationFilter);
  const filterTransmission = useSelector(selectTransmission);
  const filterAC = useSelector(selectAC);
  const filterBathroom = useSelector(selectBathroom);
  const filterKitchen = useSelector(selectKitchen);
  const filterTV = useSelector(selectTV);
  const filterVehicleType = useSelector(selectVehicleType);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const formattedLocation = (location) => {
    const [country, city] = location.split(',');
    return `${city.trim()}, ${country.trim()}`;
  };

  const filteredCampers = campers.filter((camper) => {
    const formattedCamperLocation = formattedLocation(camper.location);
    const formattedFilterLocation = filterLocation;

    const locationMatch = formattedFilterLocation
      ? formattedCamperLocation === formattedFilterLocation
      : true;

    const acMatch = filterAC ? camper.AC : true;
    const transmissionMatch = filterTransmission
      ? camper.transmission === 'automatic'
      : true;
    const kitchenMatch = filterKitchen ? camper.kitchen : true;
    const tvMatch = filterTV ? camper.TV : true;
    const bathroomMatch = filterBathroom ? camper.bathroom : true;

    const vehicleTypeMatch = filterVehicleType
      ? camper.form === filterVehicleType
      : true;

    return (
      locationMatch &&
      acMatch &&
      transmissionMatch &&
      kitchenMatch &&
      tvMatch &&
      bathroomMatch &&
      vehicleTypeMatch
    );
  });

  const totalPages = Math.ceil(total / limit);

  const campersToShow = page * limit;
  const currentCampers = filteredCampers.slice(0, campersToShow);

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
