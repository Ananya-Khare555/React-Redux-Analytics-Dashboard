import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useSelector } from "react-redux";
import "./Charts.css";

export default function AreaChart() {
  const { trends } = useSelector((state) => state.dashboard);

  return (
    <div className="chart">
      <h4>Trends</h4>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={trends}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="spend" stroke="#f97316" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
