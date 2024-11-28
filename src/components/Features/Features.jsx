import { useDispatch, useSelector } from 'react-redux';
import { selectCamperById } from '../../redux/campers/selectors.js';
import { useEffect } from 'react';
import { fetchCamperById } from '../../redux/campers/operations.js';
import s from './Features.module.css';
import sprite from '../../assets/icons.svg';
import { useParams } from 'react-router-dom';

const Features = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const camper = useSelector(selectCamperById);

  useEffect(() => {
    if (id) {
      dispatch(fetchCamperById(id));
    }
  }, [dispatch, id]);

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
      formInfo = 'Form not available';
  }

  const additionalFeatures = [
    { condition: camper.kitchen, label: 'Kitchen', icon: 'icon-cup-hot' },
    { condition: camper.AC, label: 'AC', icon: 'icon-wind' },
    { condition: camper.bathroom, label: 'Bathroom', icon: 'icon-shower' },
    { condition: camper.TV, label: 'TV', icon: 'icon-tv' },
    { condition: camper.radio, label: 'Radio', icon: 'icon-radio' },
    {
      condition: camper.refrigerator,
      label: 'Refrigerator',
      icon: 'icon-fridge',
    },
    { condition: camper.microwave, label: 'Microwave', icon: 'icon-microwave' },
    { condition: camper.gas, label: 'Gas', icon: 'icon-gas-stove' },
    { condition: camper.water, label: 'Water', icon: 'icon-drop' },
  ];

  const formatData = (value) => {
    if (!value) return '';
    const newValue = value.replace('m', ' m');
    return newValue;
  };

  if (!camper.tank) return '';

  return (
    <div className={s.container}>
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
        {additionalFeatures.map(
          (feature, index) =>
            feature.condition && (
              <li key={index} className={s.item}>
                <svg width={20} height={20}>
                  <use href={`${sprite}#${feature.icon}`}></use>
                </svg>
                {feature.label}
              </li>
            )
        )}
      </ul>
      <p className={s.detailsText}>Vehicle Details</p>

      <ul className={s.detailsList}>
        <li className={s.detailsItem}>
          <p>Form</p> <p>{formInfo}</p>
        </li>
        <li className={s.detailsItem}>
          <p>Length</p> <p>{formatData(camper.length)}</p>
        </li>
        <li className={s.detailsItem}>
          <p>Width</p> <p>{formatData(camper.width)}</p>
        </li>
        <li className={s.detailsItem}>
          <p>Height</p> <p>{formatData(camper.height)}</p>
        </li>
        <li className={s.detailsItem}>
          <p>Tank</p>
          <p>{camper.tank.replace('l', ' l')}</p>
        </li>
        <li className={s.detailsItem}>
          <p>Consumption</p>
          <p>{camper.consumption}</p>
        </li>
      </ul>
    </div>
  );
};

export default Features;
