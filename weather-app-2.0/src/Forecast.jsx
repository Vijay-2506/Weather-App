import React from 'react';

const Forecast = ({ forecast, location }) => {
    const getDayName = (dateString) => {
        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const date = new Date(dateString);
        return daysOfWeek[date.getDay()];
    }

    return (
        <>

            <div className="container">
                <div className="bg-white rounded p-1 mt-5 fw-medium text-center">
                    Forecast Weather of: {location.name}, {location.region}, {location.country}
                </div>

                <div className="row mt-3 d-flex justify-content-center gap-5">
                    {forecast.forecastday.map((data, index) => {
                        return (
                            <div className="col-md-3 col-sm-6 col-lg-3 col-xl-1 mt-2" key={index}>
                                <section className="weather-card">
                                    <h5 className="text-center fs-6 fw-semibold">{data.day.condition.text}</h5>
                                    <img
                                        src={data.day.condition.icon}
                                        className="weather-icon"
                                        alt={data.day.condition.text}
                                    />
                                    <div className="day">
                                        <h5 className="text-center text-uppercase">{getDayName(data.date)}</h5>
                                        <h5 className="text-center text-uppercase">{data.day.avgtemp_c}C°</h5>
                                    </div>
                                </section>
                            </div>
                        );
                    })}
                </div>
            </div>

        </>
    );
};

export default Forecast;
