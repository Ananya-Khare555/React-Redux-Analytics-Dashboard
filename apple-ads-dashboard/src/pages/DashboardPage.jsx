import { useSelector } from "react-redux";
import KPICard from "../components/KPICard";
import WorldMap from "../components/Charts/WorldMap";
import TrendsChart from "../components/Charts/TrendsChart";
import TopListTable from "../components/Charts/TopListTable";
import BiggestChanges from "../components/Charts/BiggestChanges";
import "./DashboardPage.css";

export default function DashboardPage() {
  const { metrics } = useSelector((state) => state.dashboard);

  return (
    <div className="dashboard">
      <div className="kpi-grid">
        {metrics.map((m, i) => (
          <KPICard key={i} {...m} />
        ))}
      </div>

      <div className="grid-2">
        <WorldMap />
        <TrendsChart />
      </div>

      <div className="grid-2">
        <TopListTable />
        <BiggestChanges />
      </div>
    </div>
  );
}
