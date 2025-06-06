import axios from 'axios';

const URL_API = 'http://localhost:4000/api';

export const fetchSuppliers = async () => {
  const res = await axios.get(`${URL_API}/suppliers`);

  return res.data.data || []
};
