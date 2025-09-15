import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      {/* Left: Title + Subtitle */}
      <div className="header-left">
        <h1 className="page-title">Overview Dashboard</h1>
        <p className="page-subtitle">
          A consolidated view of your app efficiency by storefronts and key metrics.
        </p>
      </div>

      {/* Right: Controls */}
      <div className="controls">
        <select>
          <option>Pdf Name</option>
        </select>
        <div className="date">Jul 5 - Jul 11, 2025</div>
      </div>
    </header>
  );
}
