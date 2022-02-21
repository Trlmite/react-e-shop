import axios from 'axios';
import store from '../store/index';
import * as authSlice from '../store/auth';

const annonymousInstance = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  mode: 'no-cors',
});

const fetchUsers = async () => {
  const response = await annonymousInstance.get('/auth/users');
  return response.data;
};

const fetchItems = async () => {
  const response = await annonymousInstance.get('/items/getItems');
  return response.data;
};

const fetchCarts = async () => {
  const response = await annonymousInstance.get('/carts');
  return response.data;
};

const fetchCartProducts = async () => {
  const response = await annonymousInstance.get('/cartProducts');
  return response.data;
};

const fetchOrders = async () => {
  const response = await annonymousInstance.get('/orders');
  return response.data;
};

const fetchFilters = async () => {
  const response = await annonymousInstance.get('/filters/filters');
  return response.data;
};

const login = async ({ username, password }) => {
  const { data, status } = await annonymousInstance.post('/auth/login', { username, password });

  if (status === 200) {
    const reduxAction = authSlice.login(data);
    store.dispatch(reduxAction);
    return true;
  }
  throw new Error(data.message);
};

const register = async ({
  username,
  password,
  repeatPassword,
  email,
  name,
  surname,
  city,
}) => {
  const { data, status } = await annonymousInstance.post('/auth/register', {
    username,
    password,
    repeatPassword,
    email,
    name,
    surname,
    city,
  });

  if (status === 200) {
    const reduxAction = authSlice.login(data);
    store.dispatch(reduxAction);
    return true;
  }
  throw new Error(data.message);
};

const APIService = {
  fetchUsers,
  fetchItems,
  fetchCarts,
  fetchCartProducts,
  fetchOrders,
  fetchFilters,
  login,
  register,
};

export default APIService;
