import { Link, NavLink, useLocation } from 'react-router-dom';
import s from './Header.module.css';
import clsx from 'clsx';
import sprite from '../../assets/icons.svg';

const Header = () => {
  const location = useLocation();

  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  const backgroundColor = clsx(
    s.headerWhite,
    location.pathname === '/catalog' && s.headerGray
  );

  return (
    <div className={backgroundColor}>
      <Link to="/">
        <svg width={136} height={15} className={s.logo}>
          <use href={`${sprite}#icon-TravelTrucks`}></use>
        </svg>
      </Link>
      <div className={s.nav}>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/catalog">
          Catalog
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
