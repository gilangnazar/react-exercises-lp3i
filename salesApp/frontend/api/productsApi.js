import axios from 'axios';

const URL_API = 'http://localhost:4000/api';

export const fetchProducts = async () => {
  const res = await axios.get(`${URL_API}/products`);

  return res.data.data || [];
};
