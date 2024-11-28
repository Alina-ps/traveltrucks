import { NavLink, Outlet } from 'react-router-dom';
import BookNowForm from '../../components/BookNowForm/BookNowForm.jsx';
import clsx from 'clsx';
import s from './DetailsPage.module.css';
import { Suspense } from 'react';
import CamperDetails from '../../components/CamperDetails/CamperDetails.jsx';

const DetailsPage = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  return (
    <div>
      <CamperDetails />
      <div className={s.containerLinks}>
        <NavLink className={buildLinkClass} to="features">
          Features
        </NavLink>
        <NavLink className={buildLinkClass} to="reviews">
          Reviews
        </NavLink>
      </div>
      <div className={s.wrap}>
        <Suspense fallback={<h2>Second suspense loader</h2>}>
          <Outlet />
        </Suspense>
        <BookNowForm />
      </div>
    </div>
  );
};

export default DetailsPage;
