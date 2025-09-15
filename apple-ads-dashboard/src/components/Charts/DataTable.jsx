import { useSelector } from "react-redux";
import "./Charts.css";

export default function DataTable() {
  const { campaigns } = useSelector((state) => state.dashboard);

  return (
    <div className="chart">
      <h4>Top List</h4>
      <table>
        <thead>
          <tr>
            <th>Campaigns</th>
            <th>Spend</th>
            <th>Installs</th>
            <th>Conv%</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((c, i) => (
            <tr key={i}>
              <td>{c.name}</td>
              <td>${c.spend}</td>
              <td>{c.installs}</td>
              <td>{c.conv}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
