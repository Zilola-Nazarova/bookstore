import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/App.css';

const Layout = () => (
  <div className="wrapper">
    <header>
      <h1>Bookstore CMS</h1>
      <Navbar />
    </header>
    <Outlet />
  </div>
);

export default Layout;
