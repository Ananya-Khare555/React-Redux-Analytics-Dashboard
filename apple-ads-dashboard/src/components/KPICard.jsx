import "./KPICard.css";

export default function KPICard({ label, value, change }) {
  return (
    <div className="kpi-card">
      <h4>{label}</h4>
      <p className="value">{value}</p>
      <span className="change">{change}</span>
    </div>
  );
}
