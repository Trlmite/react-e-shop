import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from './store/auth';
import theme from './styles/theme';

import PageLayout from './components/layouts/page-layout';
import CartPage from './pages/cart-page/cart-page';
import HomePage from './pages/homepage/home-page';
import ItemPage from './pages/items-page/item-page';
import LoginPage from './pages/login-page/login-page';
import RegisterPage from './pages/register-page/register-page';
import CreateListingPage from './pages/create-listing-page/create-listing-page';
// import AdminPage from './pages/admin-page/admin-page';

const App = () => {
  const { loggedIn } = useSelector(selectAuth);

  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PageLayout />}>
              <Route index element={<HomePage />} />
              <Route path="items" element={<ItemPage />} />
              {loggedIn ? <Route path="cart" element={<CartPage />} /> : null}
              {loggedIn ? <Route path="create-listing" element={<CreateListingPage />} /> : null}
              {/* <Route path="admin-page" element={<AdminPage />} /> */}
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </CssBaseline>
  );
};

export default App;
