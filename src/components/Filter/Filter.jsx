import s from './Filter.module.css';
import sprite from '../../assets/icons.svg';

const Filter = () => {
  return (
    <div className={s.container}>
      <div className={s.locationWrap}>
        <p className={s.locationText}>Location</p>
        <div className={s.inputContainer}>
          <svg className={s.inputSvg} width={20} height={20}>
            <use href={`${sprite}#icon-map`}></use>
          </svg>
          <input className={s.input} type="search" placeholder="City" />
        </div>
      </div>

      <p className={s.filterText}>Filters</p>

      <div className={s.containerFilters}>
        <h3 className={s.title}>Vehicle equipment</h3>
        <ul className={s.list}>
          <li className={s.item}>
            <svg width={32} height={32}>
              <use href={`${sprite}#icon-wind`}></use>
            </svg>
            AC
          </li>
          <li className={s.item}>
            <svg width={32} height={32}>
              <use href={`${sprite}#icon-diagram`}></use>
            </svg>
            Automatic
          </li>
          <li className={s.item}>
            <svg width={32} height={32}>
              <use href={`${sprite}#icon-cup-hot`}></use>
            </svg>
            Kitchen
          </li>
          <li className={s.item}>
            <svg width={32} height={32}>
              <use href={`${sprite}#icon-tv`}></use>
            </svg>
            TV
          </li>
          <li className={s.item}>
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
          <li className={s.item}>
            <svg width={32} height={32}>
              <use href={`${sprite}#icon-grid-1x2`}></use>
            </svg>
            Van
          </li>
          <li className={s.item}>
            <svg width={32} height={32}>
              <use href={`${sprite}#icon-grid`}></use>
            </svg>
            Fully Integrated
          </li>
          <li className={s.item}>
            <svg width={32} height={32}>
              <use href={`${sprite}#icon-grid-3x3`}></use>
            </svg>
            Alcove
          </li>
        </ul>
      </div>

      <button className={s.btn}>Search</button>
    </div>
  );
};

export default Filter;
