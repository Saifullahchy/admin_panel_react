import axios from 'axios';

const APIURL = process.env.REACT_APP_API_BASE_URL;
const token = window.localStorage.getItem('authToken');

export const apiGet = async (url, ...rest) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
  const requestURL = `${APIURL}/${url}`;
  const response = axios.get(requestURL, config, ...rest);
  return response;
};

export const apiPost = async (url, args, ...rest) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
  const requestURL = `${APIURL}/${url}`;
  const resposne = axios.post(requestURL, args, config, ...rest);
  return resposne;
};

export const apiDelete = async (url, ...rest) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
  const requestURL = `${APIURL}/${url}`;
  const response = axios.delete(requestURL, config, ...rest);
  return response;
};

export const apiPut = async (url, data, ...rest) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
  const requestURL = `${APIURL}/${url}`;
  const response = axios.put(requestURL, data, config, ...rest);
  return response;
};
