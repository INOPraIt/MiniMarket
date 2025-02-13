import axios from 'axios';
import { api_url } from '../../../common/config';

axios.defaults.withCredentials = true;

export default class {
  static getUserInfoEndpoint = () => axios.get(`${api_url}users/current`);
}
