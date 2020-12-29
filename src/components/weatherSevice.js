import axios from './axios';

const fetchWeather = (location) => {

    const options = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/weather',
        params: {
            q: location,
            lat: '0',
            lon: '0',
            id: '2172797',
            lang: 'null',
            units: '"metric" or "imperial"',
            mode: 'json'
        },
        headers: {
            'x-rapidapi-key': '50b12a7cbcmsh385299ccb166c80p135bdajsne82de051de7b',
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
        }
    };

    return axios.request(options).then(function (response) {
        console.log("response", response.data)
        return { message: 'success', data: response.data }
    }).catch(function (error) {
        return { message: 'error', data: error.data ? error.data.message : '' }
    });
}

export default fetchWeather;