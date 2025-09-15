import "./Charts.css";

export default function BiggestChanges() {
  const campaigns = [
    {
      name: "Discovery (LOC)",
      region: "India",
      barColor: "#ff6600",
      barWidth: "60%",
      spend: "$6,109.89",
      change: "+27.42%",
    },
    {
      name: "Competitor (LOC)",
      region: "India",
      barColor: "#ff6600",
      barWidth: "40%",
      spend: "$6,109.89",
      change: "+27.42%",
    },
    {
      name: "Today tab (LOC)",
      region: "India",
      barColor: "#ffcc00",
      barWidth: "20%",
      spend: "$6,109.89",
      change: "+27.42%",
    },
    {
      name: "Branding (LOC)",
      region: "India",
      barColor: "#99cc00",
      barWidth: "10%",
      spend: "$6,109.89",
      change: "+27.42%",
    },
  ];

  return (
    <div>
      <h3 className="section-title">Biggest Changes</h3>
      <div className="card">
        {/* Tabs */}
        <div className="card-header">
          <div className="tabs">
            <span className="active">Campaigns</span>
            <span>Ad Groups</span>
            <span>Keywords</span>
            <span>Ads</span>
          </div>
        </div>

        {/* Table-like list */}
        <div className="biggest-changes">
          <div className="header-row">
            <span>↓ Spend</span>
          </div>
          {campaigns.map((c, i) => (
            <div className="change-row" key={i}>
              {/* Campaign */}
              <div className="campaign-cell">
                <span className="dot"></span>
                <div className="campaign-text">
                  <div>{c.name}</div>
                  <small>{c.region}</small>
                </div>
              </div>

              {/* Bar */}
              <div className="bar-cell">
                <div
                  className="bar"
                  style={{ background: c.barColor, width: c.barWidth }}
                ></div>
              </div>

              {/* Spend */}
              <div className="spend-cell">
                <div className="cell-main">{c.spend}</div>
                <div className="cell-sub green">{c.change}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
