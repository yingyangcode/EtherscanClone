import { HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Title, Subtitle, Legend, LineSeries } from 'react-jsx-highcharts';
import Highcharts from 'highcharts';
const plotOptions = {
  chart: {
      type: '14 day Ethereum Transaction History'
  },
  title: {
      text: 'Snow depth at Vikjafjellet, Norway'
  },
  xAxis: {
    type: 'datetime',
    dateTimeLabelFormats: { // don't display the dummy year
        month: '%e. %b',
        year: '%b'
    },
    title: {
        text: 'Date'
    }
  },
  yAxis: {
    title: {
        text: 'Transactions'
    },
    min: 0
},
tooltip: {
    headerFormat: '<b>{series.name}</b><br>',
    pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
},
  series: [{
    pointStart: Date.UTC(2010, 0, 1),
    pointInterval: 3600 * 1000 // one hour
}]
};
const MyChart = (arr) => (
  <div className="app">
    <HighchartsChart plotOptions={plotOptions}>
      <Chart />

      <Title>14 day Ethereum Transaction History</Title>

      <Legend layout="vertical" align="right" verticalAlign="middle" />

      <XAxis>
        <XAxis.Title>Time</XAxis.Title>
      </XAxis>

      <YAxis id="number">
        <YAxis.Title>Transactions</YAxis.Title>
        <LineSeries id="containerchart" name="containerchart" data={[43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]} />
      </YAxis>
    </HighchartsChart>
  </div>
);

export default withHighcharts(MyChart, Highcharts); // Injecting the Highcharts object