import axios from 'axios'
import { SITE_URL, BACKEND_URI, ENVIRONMENT } from './environments'

const isClient = typeof window !== 'undefined'

export const apiUrl = ENVIRONMENT === 'local' && isClient ? `${SITE_URL}/apiProxy` : BACKEND_URI

export const httpClient = axios.create({
  baseURL: apiUrl,
})
