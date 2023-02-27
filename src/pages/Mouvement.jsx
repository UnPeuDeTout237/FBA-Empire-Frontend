import React from 'react';
import Button from '../components/Button';
import SearchBar from '../components/Search';
import Table_Pagination from '../components/tables/Table_Pagination';

const Mouvement = () => {
  return (
    <>
    <h2 className='fixed left-72 top-4 italic text-xl'>Espace Membres Mouvement</h2>
    <div className='fixed top-12 left-64'>
      <SearchBar />
    </div>
    <div className='fixed top-8 left-[72rem]'>
        <Button navigation='../crediter/Mouvement' />
      </div>
      <div>
        <Table_Pagination />
      </div>
    </>
  );
}

export default Mouvement;