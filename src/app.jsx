import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import theme from './styles/theme';

import PageLayout from './components/layouts/page-layout';
import CartPage from './pages/cart-page/cart-page';
import HomePage from './pages/homepage/home-page';
import ItemPage from './pages/items-page/item-page';
import LoginPage from './pages/login-page/login-page';

const App = () => (
  <CssBaseline>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<HomePage />} />
            <Route path="items" element={<ItemPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </CssBaseline>
);

export default App;
