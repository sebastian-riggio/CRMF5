import axios from 'axios'

const BASE_URL = 'https://crmf5-production.up.railway.app/api/v1'

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' }
})
