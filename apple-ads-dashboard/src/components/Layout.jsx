import Sidebar from "./Sidebar";
import Header from "./Header";
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout-content">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}
