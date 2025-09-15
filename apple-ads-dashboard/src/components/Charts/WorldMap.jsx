import { useState } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import "./Charts.css";

export default function WorldMap() {
  const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
  const [position, setPosition] = useState({ coordinates: [0, 20], zoom: 1 });

  const handleZoomIn = () => {
    if (position.zoom >= 4) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 1.5 }));
  };

  const handleZoomOut = () => {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 1.5 }));
  };

  return (
    <div>
      {/* Section Title */}
      <h3 className="section-title">Storefronts</h3>
    <div className="card">

      {/* Card header */}
      <div className="card-header">
        <span className="subtitle">Spend</span>
        <div className="icons">
          <span>🌐</span>
          <span>📊</span>
          <span>⬜</span>
          <span>⚙️</span>
        </div>
      </div>

      {/* Map */}
      <div className="map-container">
        <ComposableMap projectionConfig={{ scale: 140 }}>
          <ZoomableGroup center={position.coordinates} zoom={position.zoom}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const isIndia = geo.id === "356"; // ISO code for India
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={isIndia ? "#cc5200" : "#ffe0b2"}
                      stroke="#fff"
                      style={{
                        default: { outline: "none" },
                        hover: { fill: "#ff944d", outline: "none" },
                        pressed: { fill: "#cc5200", outline: "none" },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>

        {/* Zoom buttons */}
        <div className="zoom-buttons">
          <button onClick={handleZoomIn}>+</button>
          <button onClick={handleZoomOut}>−</button>
        </div>
      </div>

      {/* Scale Bar */}
      <div className="scale-container">
        <span>$6.11k</span>
        <div className="scale-bar"></div>
        <span>$6.11K</span>
      </div>
    </div>
    </div>
  );
}
