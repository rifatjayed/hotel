import React from 'react';

const RoomsDetails = ({room}) => {
   const {roomName,price,imgUrl}=room
//    console.log{room}
    return (
        <div className=' '>
        
            <div className='my-12	'>
          <div className="card w-80 bg-base-100 shadow-xl">
        <figure><img className='w-72 h-72' src={imgUrl} alt="rooms" /></figure>
        <div className="card-body">
          <h2 className="card-title">
          {roomName}
            <div className="badge badge-secondary">{price}</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
           <button>Details</button>
          </div>
        </div>
      </div>  
        </div>
         

   
      
        </div>
       
    );
};

export default RoomsDetails;