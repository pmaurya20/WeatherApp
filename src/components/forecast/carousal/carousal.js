import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './carousal.css';
import Tab from 'react-bootstrap/Tab';
import TabContent from './tabContent';
import TabPane from 'react-bootstrap/TabPane';
import Nav from 'react-bootstrap/Nav';
import Image from '../../forecast/seasonImage/seasonImage';
import DateConvertIST from '../../forecast/dateConvertToIST/dateConvertToIST';

var Slider = props => {
    const [data, setData] = useState(props.weatherData.daily[0]);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 7,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 4,
        },
    };

    var seasonLabel = (label) => {
        switch (label) {
            case (label = 'Clouds'):
                return 'Cloudy';
            case (label = 'Clear'):
                return 'Sunny';
            case (label = 'Rain'):
                return 'Rainy';
            default:
                return 'Sunny'
        }
    }

    var tabContent = (response) => {
        setData(response);        
    }

    return (
        <Tab.Container id="crausal-tabs" defaultActiveKey="sunny" >
            <Carousel
                responsive={responsive}
                removeArrowOnDeviceType={["tablet", "mobile"]} className="weather-details">
                {props.weatherData.daily.map((response, index) =>
                    <div key={index}>
                        <Nav.Item onClick={() => tabContent(response)}>
                            <Nav.Link eventKey="sunny">
                                <h2><DateConvertIST date={response.dt}/></h2>
                                <p><strong>{Math.floor(response.temp.max)}&#8451;</strong> {Math.floor(response.temp.min)}&#8451;</p>
                                <Image imageNumber={response.weather[0].icon} imageAlt={response.weather[0].main} imageWidth='20'/>
                                <p>{seasonLabel(response.weather[0].main)}</p>
                            </Nav.Link>
                        </Nav.Item>
                    </div>
                )}
            </Carousel>
            <Tab.Content>
                <TabPane eventKey="sunny">
                    <TabContent weatherType={data} hourlyData={props.weatherData.hourly} />
                </TabPane>
            </Tab.Content>
        </Tab.Container>
    )
}

export default Slider;