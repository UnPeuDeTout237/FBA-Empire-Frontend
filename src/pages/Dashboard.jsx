import React from 'react';
import Card from '../components/cards/Card';
import Table_Translation from '../components/tables/Table_Translation';

const Dashboard = () => {
  return (
    <>
      <div className='flex flex-row overflow-hidden ml-72'>
        <Card />
      </div>
      <div className='flex ml-72 mt-16'>
          <div className='w-1/2 mr-40'>
            <Table_Translation />
          </div>
          <div className='w-1/2 mr-14'>
            <Table_Translation />
          </div>
      </div>
    </>
  );
}

export default Dashboard;
