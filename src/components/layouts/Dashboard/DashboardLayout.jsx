import React from 'react';
import Sidebar from './Sidebar/Sidebar';

const DashboardLayout = ({ WrappedContent }) => {
  return (
    <div>
      <Sidebar />
      <div className="home">{<WrappedContent />}</div>
    </div>
  );
};

export default DashboardLayout;
