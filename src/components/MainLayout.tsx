import "../App.css";
import Sidebar from "./layouts/SideBar";
function MainLayout() {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="content">{/* Main content goes here */}</div>
    </div>
  );
}

export default MainLayout;
