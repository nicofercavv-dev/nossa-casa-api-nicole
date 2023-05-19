import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';

export const clientCms = axios.create({
  baseURL:process.env.URL_CMS,
})
