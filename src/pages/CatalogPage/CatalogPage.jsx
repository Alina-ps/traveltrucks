import Catalog from '../../components/Catalog/Catalog.jsx';
import Filter from '../../components/Filter/Filter.jsx';
import s from './CatalogPage.module.css';

const CatalogPage = () => {
  return (
    <div className={s.container}>
      <Filter />
      <Catalog />
    </div>
  );
};

export default CatalogPage;
