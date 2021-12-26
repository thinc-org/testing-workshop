import { httpClient } from './httpClient'


function sendCollectedLog(data: Record<string, any>[]) {
    if (data.length == 0) return
    if (process.env.NODE_ENV === 'development') return
    httpClient.post(`/clientlogging`, data).catch((e) => console.error('Error while logging', e, 'Message', data))
}