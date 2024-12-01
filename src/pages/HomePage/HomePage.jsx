import { Link } from 'react-router-dom';
import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={s.container}>
      <div className={s.containerText}>
        <h1 className={s.title}>Campers of your dreams</h1>
        <p className={s.paragraph}>
          You can find everything you want in our catalog
        </p>
        <Link to="/catalog">
          <button className={s.btn}>View Now</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
