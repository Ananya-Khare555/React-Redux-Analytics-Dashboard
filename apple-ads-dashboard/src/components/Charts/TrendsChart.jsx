import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";
import { useSelector } from "react-redux";
import "./Charts.css";

export default function TrendsChart() {
  const { trends } = useSelector((state) => state.dashboard);

  return (
    <div>
      {/* Section Title */}
      <h3 className="section-title">Trends</h3>
    <div className="card trend-card">
      {/* Header */}
      <div className="card-header">
        <div className="subtitle-row">
          <span className="plus">+</span>
          <span className="subtitle">
            <span className="legend-box"></span> Spend
          </span>
        </div>
        <div className="icons">
          <span>📊</span>
          <span>⬜</span>
          <span>⚙️</span>
        </div>
      </div>

      {/* Chart area that expands */}
      <div className="chart-body">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={trends} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f4f4f4" />
            <XAxis dataKey="date" stroke="#999" />
            <YAxis stroke="#999" />
            <Tooltip />

            {/* Area background */}
            <Area
              type="monotone"
              dataKey="spend"
              stroke="none"
              fill="url(#orangeGradient)"
            />

            <Line
              type="monotone"
              dataKey="spend"
              stroke="#ff6600"
              strokeWidth={2}
              dot={{ r: 3, fill: "#ff6600" }}
              name="India"
            />

            {/* Gradient */}
            <defs>
              <linearGradient id="orangeGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff6600" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#ff6600" stopOpacity={0} />
              </linearGradient>
            </defs>
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Footer */}
      <div className="trend-footer">
        <span className="legend-box"></span>
        <span>India</span>
      </div>
    </div>
    </div>
  );
}
