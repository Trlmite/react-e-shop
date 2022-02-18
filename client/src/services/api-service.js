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
  const response = await annonymousInstance.get('/users');
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

const login = async ({ email, password }) => {
  const { status } = await annonymousInstance.post('/auth/login', { email, password });

  if (status === 200) {
    const reduxAction = authSlice.login();
    store.dispatch(reduxAction);
    return true;
  }
  throw new Error(status);
};

const APIService = {
  fetchUsers,
  fetchItems,
  fetchCarts,
  fetchCartProducts,
  fetchOrders,
  fetchFilters,
  login,
};

export default APIService;
