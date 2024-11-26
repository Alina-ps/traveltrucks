import { Link, NavLink, useLocation } from 'react-router-dom';
import s from './Header.module.css';
import clsx from 'clsx';

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
      <Link to="/" className={s.logo}>
        Travel<span className={s.logoSpan}>Trucks</span>
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
