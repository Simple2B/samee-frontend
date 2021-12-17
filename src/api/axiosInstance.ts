import axios, {AxiosInstance} from 'axios';
import domain from './domain.json';

export const userDataInstance: AxiosInstance = axios.create({
  baseURL: domain.REACT_DOMAIN,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});
