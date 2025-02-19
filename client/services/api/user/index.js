import axios from 'axios';
import { api_url } from '../../../common/config';

axios.defaults.withCredentials = true;

export default class {
  static getUserInfoEndpoint = () => axios.get(`${api_url}users/current`);
  static registerUser = (data) => axios.post(`${api_url}user/register`, data);
  static loginUser = (data) => axios.post(`${api_url}user/login`, data)
}
