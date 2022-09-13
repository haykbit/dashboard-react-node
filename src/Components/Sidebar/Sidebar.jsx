import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';

import {
  Dashboard,
  PersonOutlineOutlined,
  Storefront,
  Dvr,
  LocalShipping,
  Equalizer,
  NotificationsNone,
  MonitorHeart,
  LogoDev,
  Settings,
  AccountCircleOutlined,
  LogoutOutlined,
} from '@mui/icons-material';

import './sidebar.scss';

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="logo">Dashboard</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Dashboard className="icon" />
            <Link to="/" style={{ textDecoration: 'none' }}>
              <span>Dashboard</span>
            </Link>
          </li>
          <p className="title">LISTS</p>
          <li>
            <PersonOutlineOutlined className="icon" />
            <Link to="/users" style={{ textDecoration: 'none' }}>
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Storefront className="icon" />
            <Link to="/products" style={{ textDecoration: 'none' }}>
              <span>Products</span>
            </Link>
          </li>
          <li>
            <Dvr className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShipping className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">SYSTEM</p>
          <li>
            <Equalizer className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNone className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <MonitorHeart className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <LogoDev className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <Settings className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlined className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlined className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      {/* <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: 'LIGHT' })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: 'DARK' })}
        ></div>
      </div> */}
    </div>
  );
};

export default Sidebar;
