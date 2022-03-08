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

// neveikia ????
const fetchCarts = async () => {
  const { user } = store.getState().auth;
  console.log({ ...user });
  const { data } = await annonymousInstance.get('/cart/cart', { user });
  return data;
};

const fetchItems = async () => {
  const response = await annonymousInstance.get('/items/getItems');
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

const deleteUser = async ({ id }) => {
  const { data, status } = await annonymousInstance.delete('auth/deleteUser', { id });

  if (status !== 200) {
    return data.message;
  }
  return data.message;
};

const createItem = async ({
  title, imageURL, description, stock, condition, manufacturer, memory, lust,
}) => {
  const { status, data } = annonymousInstance.post('/items/create', {
    title, imageURL, description, stock, condition, manufacturer, memory, lust,
  });

  if (status === 201) {
    return data.message;
  }

  return data.message;
};

const APIService = {
  fetchUsers,
  fetchItems,
  fetchFilters,
  fetchCarts,
  login,
  register,
  createItem,
  deleteUser,
};

export default APIService;
