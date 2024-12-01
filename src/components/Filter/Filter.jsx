import s from './Filter.module.css';
import sprite from '../../assets/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import DropdownList from '../DropdownList/DropdownList';
import {
  resetFilters,
  setAC,
  setBathroom,
  setKitchen,
  setLocationFilter,
  setTransmission,
  setTV,
  setVehicleType,
} from '../../redux/filter/slice.js';
import { selectOneValue } from '../../redux/dropdown/selectors.js';
import {
  selectAC,
  selectBathroom,
  selectKitchen,
  selectTransmission,
  selectTV,
  selectVehicleType,
} from '../../redux/filter/selectors.js';
import { resetLocation } from '../../redux/dropdown/slice.js';
import { selectIsLoading } from '../../redux/campers/selectors.js';
import Loader from '../Loader/Loader.jsx';

const Filter = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  const selectedLocation = useSelector(selectOneValue);
  const selectedTransmission = useSelector(selectTransmission);
  const selectedAC = useSelector(selectAC);
  const selectedBathroom = useSelector(selectBathroom);
  const selectedKitchen = useSelector(selectKitchen);
  const selectedTV = useSelector(selectTV);
  const selectedVehicleType = useSelector(selectVehicleType);

  let toggledAC = selectedAC;
  let toggledTransmission = selectedTransmission;
  let toggledBathroom = selectedBathroom;
  let toggledKitchen = selectedKitchen;
  let toggledTV = selectedTV;

  let toggledVehicleType = selectedVehicleType;

  const handleEquipment = (equipmentType) => {
    switch (equipmentType) {
      case 'AC':
        toggledAC = !toggledAC;
        break;
      case 'transmission':
        toggledTransmission = !toggledTransmission;
        break;
      case 'bathroom':
        toggledBathroom = !toggledBathroom;
        break;
      case 'kitchen':
        toggledKitchen = !toggledKitchen;
        break;
      case 'TV':
        toggledTV = !toggledTV;
        break;
      default:
        break;
    }
  };

  const handleVehicleType = (type) => {
    toggledVehicleType = type;
  };

  const handleSearch = () => {
    if (selectedLocation) {
      dispatch(setLocationFilter(selectedLocation));
    }
    dispatch(setAC(toggledAC));
    dispatch(setTransmission(toggledTransmission));
    dispatch(setBathroom(toggledBathroom));
    dispatch(setKitchen(toggledKitchen));
    dispatch(setTV(toggledTV));

    dispatch(setVehicleType(selectedVehicleType));

    dispatch(setVehicleType(toggledVehicleType));
  };

  const handleClearFilters = () => {
    dispatch(resetFilters());
    dispatch(resetLocation());
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className={s.container}>
      <div className={s.locationWrap}>
        <p className={s.locationText}>Location</p>
        <DropdownList />
      </div>

      <p className={s.filterText}>Filters</p>

      <div className={s.containerFilters}>
        <h3 className={s.title}>Vehicle equipment</h3>
        <ul className={s.list}>
          <li
            className={`${s.item} ${selectedAC ? s.active : ''}`}
            onClick={() => handleEquipment('AC')}
          >
            <svg width={32} height={32}>
              <use href={`${sprite}#icon-wind`}></use>
            </svg>
            AC
          </li>
          <li
            className={`${s.item} ${selectedTransmission ? s.active : ''}`}
            onClick={() => handleEquipment('transmission')}
          >
            <svg width={32} height={32}>
              <use href={`${sprite}#icon-diagram`}></use>
            </svg>
            Automatic
          </li>
          <li
            className={`${s.item} ${selectedKitchen ? s.active : ''}`}
            onClick={() => handleEquipment('kitchen')}
          >
            <svg width={32} height={32}>
              <use href={`${sprite}#icon-cup-hot`}></use>
            </svg>
            Kitchen
          </li>
          <li
            className={`${s.item} ${selectedTV ? s.active : ''}`}
            onClick={() => handleEquipment('TV')}
          >
            <svg width={32} height={32}>
              <use href={`${sprite}#icon-tv`}></use>
            </svg>
            TV
          </li>
          <li
            className={`${s.item} ${selectedBathroom ? s.active : ''}`}
            onClick={() => handleEquipment('bathroom')}
          >
            <svg width={32} height={32}>
              <use href={`${sprite}#icon-shower`}></use>
            </svg>
            Bathroom
          </li>
        </ul>
      </div>

      <div className={s.containerFilters}>
        <h3 className={s.title}>Vehicle type</h3>
        <ul className={s.list}>
          <li
            className={`${s.item} ${
              selectedVehicleType === 'panelTruck' ? s.active : ''
            }`}
            onClick={() => handleVehicleType('panelTruck')}
          >
            <svg width={32} height={32}>
              <use href={`${sprite}#icon-grid-1x2`}></use>
            </svg>
            Van
          </li>
          <li
            className={`${s.item} ${
              selectedVehicleType === 'fullyIntegrated' ? s.active : ''
            }`}
            onClick={() => handleVehicleType('fullyIntegrated')}
          >
            <svg width={32} height={32}>
              <use href={`${sprite}#icon-grid`}></use>
            </svg>
            Fully Integrated
          </li>
          <li
            className={`${s.item} ${
              selectedVehicleType === 'alcove' ? s.active : ''
            }`}
            onClick={() => handleVehicleType('alcove')}
          >
            <svg width={32} height={32}>
              <use href={`${sprite}#icon-grid-3x3`}></use>
            </svg>
            Alcove
          </li>
        </ul>
      </div>

      <div className={s.btnContainer}>
        <button className={s.btn} onClick={handleSearch}>
          Search
        </button>
        <button className={s.btnReset} onClick={handleClearFilters}>
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
