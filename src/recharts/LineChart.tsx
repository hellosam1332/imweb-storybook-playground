import { LineChart as ReLineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 700, pv: 2400, amt: 2400},
  {name: 'Page C', uv: 900, pv: 2400, amt: 2400},
];

const LineChart = () => (
  <ReLineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </ReLineChart>
);

export default LineChart;