import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <Header />

      <div className="dashboard-content">
        <Sidebar />

        <section className="dashboard-main">
          <Outlet />
        </section>
      </div>
    </div>
  );
}

export default DashboardLayout;