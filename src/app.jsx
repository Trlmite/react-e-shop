import { CssBaseline } from '@mui/material';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import PageLayout from './components/layouts/page-layout';
import CartPage from './pages/cart-page/cart-page';
import HomePage from './pages/homepage/home-page';
import ItemPage from './pages/items-page/item-page';

const App = () => (
  <CssBaseline>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="items" element={<ItemPage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </CssBaseline>
);

export default App;
