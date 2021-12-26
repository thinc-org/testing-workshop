import axios from 'axios'


const SITE_URL = process.env.SITE_URL
const BACKEND_URI = process.env.BACKEND_URI
const ENVIRONMENT = process.env.ENVIRONMENT

const isClient = typeof window !== 'undefined'

export const apiUrl = ENVIRONMENT === 'local' && isClient ? `${SITE_URL}/apiProxy` : BACKEND_URI

export const httpClient = axios.create({
  baseURL: apiUrl,
})
