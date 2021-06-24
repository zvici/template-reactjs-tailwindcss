import axios from 'axios'
import * as dotenv from 'dotenv'
dotenv.config()

const axiosClient = axios.create({
  baseURL: '',
})

axiosClient.interceptors.request.use((config) => {
  // console.log('ENV: ' + JSON.stringify(process.env));
  // console.log('Base URL: ' + config.baseURL);

  const token = localStorage.getItem('token')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default axiosClient
