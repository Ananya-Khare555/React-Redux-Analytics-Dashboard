import "./Charts.css";

export default function TopList() {
  const campaigns = [
    {
      name: "Discovery (LOC)",
      region: "India",
      spend: "$6,109.89",
      spendChange: "+27.42%",
      installs: "$44",
      installsChange: "+27.42%",
      conv: "0.00%",
      convChange: "0%",
    },
    {
      name: "Competitor (LOC)",
      region: "India",
      spend: "$6,109.89",
      spendChange: "+27.42%",
      installs: "$121",
      installsChange: "+27.42%",
      conv: "0.00%",
      convChange: "0%",
    },
    {
      name: "Today tab (LOC)",
      region: "India",
      spend: "$6,109.89",
      spendChange: "+27.42%",
      installs: "$44",
      installsChange: "+27.42%",
      conv: "0.00%",
      convChange: "0%",
    },
    {
      name: "Branding (LOC)",
      region: "India",
      spend: "$6,109.89",
      spendChange: "+27.42%",
      installs: "$44",
      installsChange: "+27.42%",
      conv: "0.00%",
      convChange: "0%",
    },
  ];

  return (
    <div>
      <h3 className="section-title">Top List</h3>
      <div className="card">
        {/* Header Tabs */}
        <div className="card-header">
          <div className="tabs">
            <span className="active">Campaigns</span>
            <span>Ad Groups</span>
            <span>Keywords</span>
            <span>Ads</span>
          </div>
        </div>

        {/* Table */}
        <table className="data-table fancy-table">
          <thead>
            <tr>
              <th>Campaigns</th>
              <th>↓ Spend</th>
              <th>Installs</th>
              <th>Conv%</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((c, i) => (
              <tr key={i}>
                {/* Campaign name with dot + region */}
                <td>
                  <div className="campaign-cell">
                    <span className="dot"></span>
                    <div className="campaign-text">
                      <div>{c.name}</div>
                      <small>{c.region}</small>
                    </div>
                  </div>
                </td>

                {/* Spend */}
                <td className="highlight-cell">
                  <div className="cell-main">{c.spend}</div>
                  <div className="cell-sub green">{c.spendChange}</div>
                </td>

                {/* Installs */}
                <td className="highlight-cell light">
                  <div className="cell-main">{c.installs}</div>
                  <div className="cell-sub green">{c.installsChange}</div>
                </td>

                {/* Conv% */}
                <td>
                  <div className="cell-main">{c.conv}</div>
                  <div className="cell-sub">{c.convChange}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
