import { NODE_ENV } from './environments'
import { httpClient } from './httpClient'


export function sendCollectedLog(data: Record<string, any>[]) {
    if (data.length == 0) return
    if (NODE_ENV === 'development') return
    httpClient.post(`/clientlogging`, data).catch((e) => console.error('Error while logging', e, 'Message', data))
}