// src/services/loggingService.js
import axios from 'axios';

export const logRequest = (logData) => {
  console.log('Logging request: ', logData);

  // Optionally send logs to a server
  // axios.post('/api/logs', logData).catch(err => console.error(err));

  // Optionally store logs in localStorage
  // let logs = JSON.parse(localStorage.getItem('logs')) || [];
  // logs.push(logData);
  // localStorage.setItem('logs', JSON.stringify(logs));
};
