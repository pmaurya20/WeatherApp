import React from 'react';

var dateToDay = (d) => {
    let weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    let date = new Date(d * 1000);
    let day = weekday[date.getDay()];
    return day;
}

var dateToHours = (h) => {
    let time = new Date(h);
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

var DateConvertIST = props => {
    return (
        <div>
            {props.date ? <span>{dateToDay(props.date)}</span> : null}
            {props.hours ? <span>{dateToHours(props.hours)}</span> : null}
        </div>
    )
}

export default DateConvertIST;