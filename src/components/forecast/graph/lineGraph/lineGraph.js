import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

var lineChart = props => {
  const temp = props.lineChartTempData.map(a => Math.floor(a.temp));
  const lineChartOption = {
    chart: {
      height: 200,
      type: 'spline',
      animation: true
    },

    xAxis: {
      categories: temp,
      gridLineWidth: 1,
      minorGridLineWidth: 0,
      title: {
        text: null
      }
    },

    title: {
      text: null
    },

    tooltip: {
      pointFormat: '<span>Temp: {point.y:.2f} °C<br/>'
    },

    credits: {
      enabled: false
    },

    yAxis: {
      labels: {
        enabled: false
      },
      title: {
        text: null
      },
      gridLineWidth: 0,
      minorGridLineWidth: 0,
      lineWidth: 0
    },

    legend: { enabled: false },

    series: [{
      data: temp,
      color: '#33D8DD'
    }]
  }
  return (
    <HighchartsReact highcharts={Highcharts} options={lineChartOption} />
  );
}

export default lineChart;

