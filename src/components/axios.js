import axios from 'axios';

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "x-rapidapi-key": "50b12a7cbcmsh385299ccb166c80p135bdajsne82de051de7b",
    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
    "useQueryString": true
}


const getAxiosInstance = () => {
    // const token = localStorage.getItem('access_token');
    const instance = axios.create({
        headers
    });
    // Loader Before data fetches 
    instance.interceptors.request.use(reqConfig => {
        document.getElementsByClassName("loader")[0].style.display = "block";
        return reqConfig;
    },
        err => {
            return Promise.reject(err);
        },
    );

    instance.interceptors.response.use(response => {
        document.getElementsByClassName("loader")[0].style.display = "none";
        return response;
    },
        (err) => {
            document.getElementsByClassName("loader")[0].style.display = "none";
            return Promise.reject({ ...err }.response);
        },
    );

    return instance;
}

export default getAxiosInstance();