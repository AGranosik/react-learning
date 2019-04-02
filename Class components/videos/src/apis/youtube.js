import axios from 'axios';

const KEY = 'AIzaSyBrKo0CEP8I5LNu7wuhHEbNqNZQGnX4C60';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});