import axios from 'axios';

const URL_API = 'http://localhost:4000/api';

export const fetchUsers = async () => {
  const res = await axios.get(`${URL_API}/users`);

  return res.data.data || [];
};
