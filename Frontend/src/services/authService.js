import axios from 'axios';
import { API_ENDPOINTS, axiosConfig } from '../config/apiConfig';

export const login = async (credentials) => {
  const response = await axios.post(API_ENDPOINTS.AUTH.LOGIN, credentials, axiosConfig);
  return response.data;
};

export const signup = async (credentials) => {
  const response = await axios.post(API_ENDPOINTS.AUTH.SIGNUP, credentials, axiosConfig);
  return response.data;
};
