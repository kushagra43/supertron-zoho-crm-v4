import axios from 'axios';
import { BaseURL } from '../constant';

export const createUserInPlatform = (payload) => {
  return new Promise((resolve, reject) => {
    axios.post(`${BaseURL}/api/ess-service/v1/public/upskill/register`, payload, {
      headers: {
        'Authorization': 'Bearer JZzPUvNQmowjclqgsqyW0Izv0bj0ZI73-gg7wfbU0HU=',
        'apiKey': 'JZzPUvNQmowjclqgsqyW0Izv0bj0ZI73-gg7wfbU0HU=',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true
      }
    })
      .then(response => {
        resolve(response?.data);
      })
      .catch(reject);
  });
};
