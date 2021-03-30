import axios from 'axios';
import { config } from '../config/config';



export const instance = axios.create({
  baseURL: "https://users-demo-api.herokuapp.com"
});
