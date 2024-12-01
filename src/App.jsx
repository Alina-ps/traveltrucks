import { Route, Routes } from 'react-router-dom';
import './App.css';
import { lazy, Suspense } from 'react';
import Header from './components/Header/Header.jsx';
import Loader from './components/Loader/Loader.jsx';

const Home = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const Catalog = lazy(() => import('./pages/CatalogPage/CatalogPage.jsx'));
const Details = lazy(() => import('./pages/DetailsPage/DetailsPage.jsx'));
const Features = lazy(() => import('./components/Features/Features.jsx'));
const Reviews = lazy(() => import('./components/Reviews/Reviews.jsx'));
const NotFound = lazy(() => import('./pages/NotFoundPage/NotFoundPage.jsx'));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/catalog" element={<Catalog />}></Route>
          <Route path="/catalog/:id" element={<Details />}>
            <Route path="features" element={<Features />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
