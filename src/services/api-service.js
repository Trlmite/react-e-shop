import axios from 'axios';

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
  const response = await annonymousInstance.get('/items');
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
  const response = await annonymousInstance.get('/filters');
  return response.data;
};

const fetchedItems = async () => {
  const items = await fetchItems();
  const formatedItems = items.map(({
    id, price, ...rest
  }) => {
    const item = {
      ...rest,
      id,
      price: `${price.value} ${price.currency}`,
    };
    return item;
  });

  return formatedItems;
};

const APIService = {
  fetchUsers,
  fetchItems,
  fetchCarts,
  fetchCartProducts,
  fetchOrders,
  fetchFilters,
  fetchedItems,
};

export default APIService;
