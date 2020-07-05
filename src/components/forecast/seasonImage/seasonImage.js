import React from 'react';
import sunny from '../../../assets/sun.png';
import cloudy from '../../../assets/weather.png';
import rain from '../../../assets/rain.png';

// Weathe Image
var images = (image) => {
    switch (image) {
        case (image = '10d'):
            return rain;
        case (image = '04d'):
            return cloudy;
        case (image = '02d'):
            return cloudy;
        case (image = '03d'):
            return cloudy;
        case (image = '01d'):
            return sunny;
        default:
            return sunny
    }
}

var Image = props => {
    return (
        <img src={images(props.imageNumber)} alt={props.imageAlt} width={props.imageWidth} />
    )
}

export default Image;