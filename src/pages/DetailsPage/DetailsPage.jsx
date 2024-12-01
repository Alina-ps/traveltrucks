import { NavLink, Outlet } from 'react-router-dom';
import BookNowForm from '../../components/BookNowForm/BookNowForm.jsx';
import clsx from 'clsx';
import s from './DetailsPage.module.css';
import { Suspense } from 'react';
import CamperDetails from '../../components/CamperDetails/CamperDetails.jsx';
import Loader from '../../components/Loader/Loader.jsx';

const DetailsPage = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  return (
    <div className={s.container}>
      <CamperDetails />
      <div className={s.containerLinks}>
        <NavLink className={buildLinkClass} to="features">
          Features
        </NavLink>
        <NavLink className={buildLinkClass} to="reviews">
          Reviews
        </NavLink>
      </div>
      <Suspense fallback={<Loader />}>
        <div className={s.wrap}>
          <Outlet />
          <BookNowForm />
        </div>
      </Suspense>
    </div>
  );
};

export default DetailsPage;
