import axios from 'axios';

const baseUrl = 'https://imdb-api.com';
const api_key = 'k_7fzl9a67';

const client = axios.create({
  baseURL: baseUrl,
});

client.interceptors.request.use(
  function (config) {
    console.log(config);
    return config;
  },
  function (error) {
    // logging crashlytic
    return Promise.reject(error);
  },
);

export const transformRequestUrl = path => {
  return `/en/API${path}/${api_key}`;
};

export default client;
