import React from 'react';
// import Nav from 'react-bootstrap/Nav';
import PropTypes from 'prop-types';
import Image from '../../forecast/seasonImage/seasonImage';
import LineChartTemp from '../../forecast/graph/lineGraph/lineGraph';
import DateConvertIST from '../../forecast/dateConvertToIST/dateConvertToIST';
import AreaChartSunRiseSet from '../../forecast/graph/areaGraph/areaGraph';

var TabsContent = props => {
    return (
        <div className="weather-graph">
            <h3>{Math.floor(props.weatherType.temp.day)} &#8451; <Image imageNumber={props.weatherType.weather[0].icon} imageAlt={props.weatherType.weather[0].main} imageWidth='40'/></h3>
            {props.hourlyData ?
                <LineChartTemp lineChartTempData={props.hourlyData} />
                : null
            }
            <div>
            </div>
            <ul className="row">
                <li className="col-6 pl-0">
                    <div>
                        <h4>Pressure</h4>
                        <span>{Math.floor(props.weatherType.pressure)} hpa</span>
                    </div>

                </li>
                <li className="col-6 pr-0">
                    <div>
                        <h4>Humidity</h4>
                        <span>{Math.floor(props.weatherType.humidity)} hpa</span>
                    </div>
                </li>
            </ul>
            <div>
                <div className="sunrise-sunset">
                    <div className="sunrise">
                        <h5>Sunrise</h5>
                        <DateConvertIST hours={Math.floor(props.weatherType.sunrise)} />
                    </div>
                    <div className="sunset">
                        <h5>Sunset</h5>
                        <DateConvertIST hours={Math.floor(props.weatherType.sunset)} />
                    </div>
                    <AreaChartSunRiseSet />
                </div>            
            </div>
        </div>
    )
}

TabsContent.prototype = {
    tabsName: PropTypes.string
}

export default TabsContent;