import axios from 'axios'

export const httpService = axios.create({
  baseURL: process.env.API_URL,
  params: { api_key: process.env.API_KEY }
})
