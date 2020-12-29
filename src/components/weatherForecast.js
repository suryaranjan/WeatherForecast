import React from 'react';
import './weatherForecast.css';
import fetchWeather from './weatherSevice';

const WeatherForecast = (props) => {
    const [location, setLocation] = React.useState('');
    const [weather, setWeather] = React.useState({});
    const [errorMessage, setErrorMessage] = React.useState('');

    const handleWeatherSearch = (e) => {
        e.preventDefault();
        fetchWeather(location)
            .then(result => {
                let { message, data } = result;
                if (message === 'success') {
                    setWeather(data);
                    setErrorMessage('');
                } else {
                    setErrorMessage(data);
                    setWeather({});
                }
            })
    }
    console.log("locaot", location)
    return (
        <>
            <div className='weatherForecast'>
                <div className='searchBox'>
                    <form onSubmit={handleWeatherSearch}>
                        <h3>Weather Search</h3>
                        <input value={location} onChange={e => setLocation(e.target.value)}></input>
                    </form>
                </div>
                {weather && weather.id ? <div className='weatherCard'>
                    <table>
                        <tr>
                            <th>Temprature</th>
                            <td>{weather.id ? <>{`${weather.main.temp}`}&#8457;</> : ''}</td>
                        </tr>
                        <tr>
                            <th>Status</th>
                            <td>{weather.id ? `${weather.weather[0] ? `${weather.weather[0].description}` : ''}` : ''}</td>
                        </tr>
                        <tr>
                            <th>Max Temprature</th>
                            <td>{weather.id ? <>{`${weather.main.temp_max}`}&#8457;</> : ''}</td>
                        </tr>
                        <tr>
                            <th>Min Temprature</th>
                            <td>{weather.id ? <>{`${weather.main.temp_min}`}&#8457;</> : ''}</td>
                        </tr>
                        <tr>
                            <th>Humidity</th>
                            <td>{weather.id ? `${weather.main.humidity}` : ''}</td>
                        </tr>
                    </table>
                </div> : ''}
                {errorMessage ? <p className="errorMessage">{errorMessage}</p> : ''}
            </div>
        </>
    )
}

export default WeatherForecast;