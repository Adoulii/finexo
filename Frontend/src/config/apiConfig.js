export const BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api/v1';
export const API_ENDPOINTS = {
    AUTH: {
      LOGIN: `${BASE_URL}/auth/login`,
      SIGNUP: `${BASE_URL}/auth/signup`,
      LOGOUT: `${BASE_URL}/auth/logout`,
      REFRESH_TOKEN: `${BASE_URL}/auth/refresh-token`
    }
  };

  export const axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true
  }