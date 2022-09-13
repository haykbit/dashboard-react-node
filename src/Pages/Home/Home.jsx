import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import Widget from '../../Components/Widget/Widget';
import FeaturedChart from '../../Components/FeaturedChart/FeaturedChart';
import Chart from '../../Components/Chart/Chart';
import ListTable from '../../Components/ListTable/ListTable';

import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <FeaturedChart />
          <Chart aspect={2 / 1} title="Last 6 Month (Revenue)" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <ListTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
