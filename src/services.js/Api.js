// src/services/api.js
import axios from 'axios';
import { logRequest } from './loggingService';

const apiClient = axios.create({
  baseURL: 'https://your-api-url.com',
});

apiClient.interceptors.request.use(
  (config) => {
    const logData = {
      timestamp: new Date().toISOString(),
      method: config.method,
      url: config.url,
      user_agent: navigator.userAgent,
      query_params: config.params || '',
      body: config.data || '',
      cookies: document.cookie,
    };

    logRequest(logData);
    return config;
  },
  (error) => {
    logRequest({ error: error.message });
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    const logData = {
      timestamp: new Date().toISOString(),
      method: response.config.method,
      url: response.config.url,
      status_code: response.status,
      response_size_bytes: response.headers['conten
