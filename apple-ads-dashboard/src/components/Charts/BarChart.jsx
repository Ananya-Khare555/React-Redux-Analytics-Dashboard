import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useSelector } from "react-redux";
import "./Charts.css";

export default function CustomBarChart() {
  const { campaigns } = useSelector((state) => state.dashboard);

  return (
    <div className="chart">
      <h4>Biggest Changes</h4>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={campaigns} layout="vertical">
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip />
          <Bar dataKey="spend" fill="#f97316" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
