import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Current from './Current';
import Forecast from './Forecast';
import logo from './assets/cloud.png'



const Home = () => {
    const [typedCity, setTypedCity] = useState('');
    const [fetchcity, setfetchcity] = useState([]);
    const [selectcity, setselecty] = useState();
    const [forecast, setforeCast] = useState();
    const [location, setlocation] = useState();
    const [current, setCurrentWeather] = useState();

    const AutoFetchUrl = 'https://api.weatherapi.com/v1/search.json?key=83c0b17cb2774eac95723527231501&q=';
    const weatherUrl = (typedCity) => `http://api.weatherapi.com/v1/forecast.json?key=71f559840001414aa1370647241710&q=${typedCity}&days=8&aqi=yes&alerts=no`;

    const FetchAutoUrl = async () => {
        try {

            const getResponse = await axios.get(AutoFetchUrl + typedCity)
            const resp = getResponse.data;
            console.log(resp);
            const cityfetch = resp.map((data) => {
                return `${data.name} , ${data.region} , ${data.country}`
            })
            setfetchcity(cityfetch)

        } catch (error) {
            console.error('error in Auto url api', error);

        }
    }

    const fetchWeather = async () => {
        try {
            const response = await axios.get(weatherUrl(typedCity))
            const resp = response.data;
            setforeCast(resp.forecast)
            setlocation(resp.location)
            setCurrentWeather(resp.current)




        } catch (error) {
            console.error('error in forecast Weather url api', error);
        }
    }

    const handleInputChange = (e) => {

        const values = e.target.value;
        setTypedCity(values);
        setselecty(values)
        setforeCast(null)
        setCurrentWeather(null)

    };

    const clickcity = (data) => {
        console.log(data);
        setselecty(data)
        setfetchcity([])
        fetchWeather()

    }


    const getdata = () => {
        fetchWeather()
        setfetchcity([])
    }

    const clearInput = () => {
        setfetchcity([])
        setselecty('')
        setTypedCity('')
        setforeCast(null)
        setCurrentWeather(null)
        setlocation(null)

    }

    useEffect(() => {

        if (typedCity && typedCity.length > 3) {

            FetchAutoUrl();
        }

    }, [typedCity]);

    return (
        <>
            <div className="container mt-2">
                <div className="container mt-2">
                    <div className="row justify-content-evenly align-items-center gap-1">
                        {/* Logo and Title */}
                        <div className="col-2 col-md-2 d-flex align-items-center">
                            <img src={logo} alt="logo" style={{ width: '40px', height: '40px' }} />
                            <h4 className="mx-3 mb-0">Weather</h4>
                        </div>

                        {/* Search Input with Clear Button */}
                        <div className="col-12 col-md-7  position-relative mt-2 mt-md-0">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search city..."
                                value={selectcity}
                                onChange={handleInputChange}
                            />
                            {selectcity && (
                                <button
                                    title="Clear"
                                    className="btn btn-close position-absolute top-50 end-0 me-3 translate-middle"
                                    onClick={clearInput}
                                    aria-label="Close"
                                ></button>
                            )}
                        </div>

                        {/* Search Button */}
                        <div className="col-6 col-md-2 mt-2 mt-md-0 text-end text-md-start">
                            <button className="btn btn-primary w-100" onClick={getdata}>
                                Search
                            </button>
                        </div>
                    </div>
                </div>


                {/* City Suggestions */}
                <div className="container mt-2 col-12 col-md-6">
                    <div className="row align-items-center">
                        {typedCity && (
                            <div className="bg-white rounded w-100">
                                <div className="text-center">
                                    {fetchcity.map((data, index) => (
                                        <h4
                                            className="my-2 text-dark city-suggestion p-1"
                                            style={{ cursor: 'pointer' }}
                                            key={index}
                                            onClick={() => clickcity(data)}
                                        >
                                            {data}
                                        </h4>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Current Weather and Forecast Components */}
                {current && <Current current={current} location={location} />}
                {forecast && <Forecast forecast={forecast} current={current} location={location} />}
            </div>

        </>
    );
};

export default Home;




// weather api =  http://api.weatherapi.com/v1/forecast.json?key=71f559840001414aa1370647241710&q=${city}&days=1&aqi=yes&alerts=no

//  auto complete url = 'https://api.weatherapi.com/v1/search.json?key=83c0b17cb2774eac95723527231501&q='