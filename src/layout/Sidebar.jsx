import { NavLink, useNavigate } from 'react-router-dom';

function Sidebar() {
const navigate = useNavigate();

const menuItems = [
{ title: 'لوحة التحكم', path: '/dashboard' },
{ title: 'الرئيسية', path: '/home' },
{ title: 'تذاكري', path: '/tickets' },
{ title: 'إنشاء تذكرة', path: '/create-ticket' },
{ title: 'الاشتراكات', path: '/subscriptions' },
{ title: 'بياناتي الشخصية', path: '/profile' },
];

function handleLogout() {
localStorage.removeItem('token');
navigate('/');
}

return ( <aside className="dashboard-sidebar"> <h3>لوحة التحكم</h3>

  <nav>
    {menuItems.map((item) => (
      <NavLink
        key={item.path}
        to={item.path}
        className={({ isActive }) =>
          isActive ? 'sidebar-link active' : 'sidebar-link'
        }
      >
        {item.title}
      </NavLink>
    ))}
  </nav>

  <button
    type="button"
    className="sidebar-logout"
    onClick={handleLogout}
  >
    تسجيل الخروج
  </button>
</aside>


);
}

export default Sidebar;
