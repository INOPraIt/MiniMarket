import axios from 'axios';
import { api_url } from '../../../common/config';

axios.defaults.withCredentials = true;

export default class {
  static getAllProduct = (id) => axios
    .get(`${api_url}product`);

  static getProductById = (id) => 
    axios.get(`${api_url}product/${id}`);
}
