import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers: {
        Authorization:
        'Client-ID 72e8bb21b3024f71793fab7c8522c3ff102ede75f1138ff889e9980c3aa2c976'
    }
});