import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/App.css';

const Layout = () => (
  <div className="wrapper">
    <header>
      <Navbar />
    </header>
    <Outlet />
  </div>
);

export default Layout;
