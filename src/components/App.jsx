import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from 'pages/Home/Home';
import { About } from 'pages/About/About';
import { Team } from './Team/Team';
import { Statistics } from './Statistics/Statistics';
import { Info } from './Info/Info';
import { Products } from 'pages/Products/Products';
import { ProductDetails } from 'pages/ProductDetails/ProductDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="info" element={<Info />} />
          <Route path="team" element={<Team />} />
          <Route path="statistics" element={<Statistics />} />
        </Route>
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};
