import {
  FiCircle,
  FiCheckCircle,
  FiGrid,
  FiGift,
  FiSearch,
  FiImage,
  FiZap,
  FiRefreshCw,
  FiSettings,
  FiHelpCircle,
  FiUser,
} from "react-icons/fi";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Top logo / circle */}
      <div className="logo">
        <FiCircle />
      </div>

      {/* Main navigation */}
      <nav className="nav-icons">
        <FiCheckCircle className="active" />
        <FiGrid />
        <FiGift />
        <FiSearch />
        <FiImage />
        <FiZap />
        <FiRefreshCw />
      </nav>

      {/* Bottom section */}
      <div className="bottom-icons">
        <FiSettings />
        <FiHelpCircle />
        <FiUser />
      </div>
    </aside>
  );
}
