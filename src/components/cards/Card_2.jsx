import React from 'react';
import Button from '../Button';

const Card_2 = ({type}) => {
  return (
    <div className='relative top-8 overflow-hidden'>
      <div className='bg-white w-[245px] h-[251px] mt-9 shadow-xl hover:shadow-2xl hover:shadow-green-900 rounded-lg mr-5'>
        <div className='bg-green-700 p-4'>
        </div>
        <div className='bg-white p-4'>
          <h3 className='font-bold font-Roboto'>Nom : <span className='font-light'>Naruto</span> </h3>
          <h3 className='font-bold font-Roboto'>Prenom : <span className='font-light'>Franklin</span> </h3>
          <h3 className='font-bold font-Roboto hidden'>Email : <span className='font-light'>Dzukam</span> </h3>
          <h3 className='font-bold font-Roboto'>Numero : <span className='font-light'>659018348</span> </h3>
          <h3 className='font-bold font-Roboto'>Type : <span className='font-light'>{type}</span> </h3>
          <h3 className='font-bold font-Roboto'>Solde : <span className='font-light'>5532 Fcfa</span> </h3>

        </div>
        <div>
          <button className='bg-green-700 mt-8 text-white h-9 text-center w-full hover:rounded-t-lg'>Ajouter</button>
        </div>
      </div>
    </div>
  );
}

export default Card_2;
