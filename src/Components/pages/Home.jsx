import React, { createContext, useContext } from 'react';
import Nav from '../shares/Nav';
import Hero from '../Hero';

import RoomsDetails from '../RoomsDetails';
import { RoomContext } from '../context/RoomProvider';
import BookForm from '../BookForm';



const Home = () => {
  const {rooms}= useContext(RoomContext);
  console.log(rooms)




    return (
        <div>
          
          <Hero></Hero>
          <div className='mx-auto w-4/5'>
            <BookForm></BookForm>
          </div>
          
<div>
  <h1 className='text-center	my-6 font-bold text-5xl'>Our Rooms</h1>
  <p className='text-center	font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
   Corrupti incidunt non totam veniam quisquam harum cupiditate eaque hic. A, natus!</p>
  <div className='flex justify-center space-x-4'>


  {
            rooms.slice(0,3).map( room=> <RoomsDetails
              key={room.id}
              room={room}
            ></RoomsDetails>)
          }

    
</div>
</div>

 

        </div>
    );
};

export default Home;