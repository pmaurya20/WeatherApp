import React from 'react';
import Carousal from './carousal/carousal';
import './forecast.css';

// Search Forecast/result
let forcast = props => {
    return(
        <div className="forecast-container mt-2">
            {/* 7 days Weather Carousal */}
            <Carousal weatherData={props.forecastData}></Carousal>
        </div>
    )
}
export default forcast;

