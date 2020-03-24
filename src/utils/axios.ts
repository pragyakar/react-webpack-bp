import axios, { AxiosRequestConfig } from 'axios';
import { config } from 'src/config';
import parseErrorMessage from './error';
import storage from 'src/utils/storage';

const axiosInstance = axios.create({
  baseURL: config.ApiEnv.baseURL,
  timeout: config.ApiEnv.timeout
});

axiosInstance.interceptors.request.use(function(config) {
  let storageItem = storage.getItem('react-webpack-bp');

  if (storageItem) {
    let session = JSON.parse(storageItem);
    config.headers['Authorization'] = `Bearer ${session.access_token}`;
    return config;
  } else {
    return config;
  }
});

interface IClientError {
  config: AxiosRequestConfig;
  request: XMLHttpRequest;
  response: undefined;
  message: string;
  stack: string;
}

function parseClientError(error: IClientError) {
  let parsedError = {
    message: 'Something went wrong',
    status: 'CLIENT_ERROR'
  };
  if (error.message === 'Network Error') {
    parsedError = {
      message: 'There seems to be no internet connection',
      status: 'CLIENT_ERROR'
    };
  }
  return parsedError;
}

axiosInstance.interceptors.response.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error.response ? parseErrorMessage(error.response) : parseClientError(error));
  }
);

export default axiosInstance;
