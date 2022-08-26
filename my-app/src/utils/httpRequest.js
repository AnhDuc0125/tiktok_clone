import axios from 'axios';

const httpRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 5000,
});

export const get = async (path, options = {}) => {
  const reponse = await httpRequest.get(path, options);

  return reponse.data;
};

export default httpRequest;
