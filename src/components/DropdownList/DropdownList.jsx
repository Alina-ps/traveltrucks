import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsOpen,
  selectOneValue,
  selectOptions,
} from '../../redux/dropdown/selectors.js';
import {
  closeDropdown,
  openDropdown,
  selectValue,
} from '../../redux/dropdown/slice.js';
import s from './DropdownList.module.css';
import sprite from '../../assets/icons.svg';

const DropdownList = () => {
  const dispatch = useDispatch();
  const options = useSelector(selectOptions);
  const selectedValue = useSelector(selectOneValue);
  const isOpen = useSelector(selectIsOpen);

  const handleOptionClick = (option) => {
    dispatch(selectValue(option));
    dispatch(closeDropdown());
  };

  const toggleDropdown = () => {
    dispatch(isOpen ? closeDropdown() : openDropdown());
  };

  return (
    <div className={s.dropdownContainer} onClick={toggleDropdown}>
      <svg className={s.inputSvg} width={20} height={20}>
        <use href={`${sprite}#icon-map`}></use>
      </svg>
      <input
        className={s.input}
        type="text"
        placeholder="City"
        value={selectedValue}
        readOnly
        onClick={toggleDropdown}
      />
      {isOpen && (
        <ul className={s.dropdownList}>
          {options.map((option) => (
            <li
              key={option}
              className={s.dropdownItem}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownList;
