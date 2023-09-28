import axios from 'axios'

const BASE_URL = 'https://localhost:3000/api/v1'

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
})
