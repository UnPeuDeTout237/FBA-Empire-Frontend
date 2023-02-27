import React from 'react';


const Card = () => {
  return (
    <div className='grid grid-cols-5'>
        <div className="bg-green-900 w-48 h-32 shadow-xl rounded-lg text-center mr-7 mt-9">
            <div className="text-white">
                <h2 className="font-Ubuntu font-bold pt-8">Totals Actionnaire</h2>
                <h3 className="font-Ubuntu py-8">9232</h3>
            </div>
        </div>
        <div className="bg-green-900 w-48 h-32 shadow-xl rounded-lg text-center mr-7 mt-9">
            <div className="text-white">
                <h2 className="font-Ubuntu font-bold pt-8">Totals Ambassadeurs</h2>
                <h3 className="font-Ubuntu py-8">2232</h3>
            </div>
        </div>
        <div className="bg-green-900 w-48 h-32 shadow-xl rounded-lg text-center mr-7 mt-9">
            <div className="text-white">
                <h2 className="font-Ubuntu font-bold pt-8">Totals Clients</h2>
                <h3 className="font-Ubuntu py-8">8232</h3>
            </div>
        </div>
        <div className="bg-green-900 w-48 h-32 shadow-xl rounded-lg text-center mr-7 mt-9">
            <div className="text-white">
                <h2 className="font-Ubuntu font-bold pt-8">Totals Membre Plein</h2>
                <h3 className="font-Ubuntu py-8">3232</h3>
            </div>
        </div>
        <div className="bg-green-900 w-48 h-32 shadow-xl rounded-lg text-center mr-7 mt-9">
            <div className="text-white">
                <h2 className="font-Ubuntu font-bold pt-8">Totals Mouvement</h2>
                <h3 className="font-Ubuntu py-8">1232</h3>
            </div>
        </div>
    </div>
  );
}

export default Card;
