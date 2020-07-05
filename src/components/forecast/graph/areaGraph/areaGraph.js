import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

var areaChart = props => {
  // const temp = props.lineChartTempData.map(a => Math.floor(a.temp));
  // const hourTime = props.lineChartTempData.map(a => a.dt);
  const areaChartOption = {
    chart: {
      height: 200,
      type: 'areaspline',
      animation: true
    },
    xAxis: [{
      categories: ['6am', '', '', '', '', '1pm', '', '', '', '', '8pm'],
      gridLineWidth: 0,
      minorGridLineWidth: 0,
  lineWidth: 0,
      
      title: {
        text: null
      }
    }],
    title: {
      text: null
    },
    
    yAxis: {
      labels: {
        enabled: false
      },
      
      gridLineWidth: 0,
      minorGridLineWidth: 0,
  lineWidth: 0,
      title: {
        text: null
      }
    },
    plotOptions: {
      areaspline: {
        fillOpacity: 0.5
      }
    },
    credits: {
      enabled: false
    },
    legend: { enabled: false },
    series: [{
      marker: {
        enabled: false
      },
      name: 'Sunrise',
      data: [0, 0, 0, 0, 2, 3, 2, 0, 0, 0, 0],
      lineColor: '#f5c05e',
      color: {
        linearGradient: {
          x1: 0,
          x2: 0,
          y1: 0,
          y2: 1
        },
        stops: [
          [0, '#FEE5B6'],
          [1, '#fff']
        ]
      },
      tooltip: {
        pointFormat: '<span>Sunrise: {point.y:.2f}<br/>'
      },
    }, {
      color: '#666667',
      marker: {
        enabled: false
      },
      name: 'Sunset',
      data: [-3, -2, -1, 0, 0, 0, 0, 0, -3, -2, -1],
      tooltip: {
        pointFormat: '<span>Sunset: {point.y:.2f}<br/>'
      },
    }]
  }
  return (
    <HighchartsReact highcharts={Highcharts} options={areaChartOption} />
  );
}

export default areaChart;