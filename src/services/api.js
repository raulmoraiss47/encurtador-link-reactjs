import axios from 'axios';

export const key = "ce19aed49c2eee79adc6a9a32256bdb79716334b";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;
