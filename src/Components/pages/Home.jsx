import React from 'react';
import Nav from '../shares/Nav';
import Hero from '../Hero';
import { useLoaderData } from 'react-router-dom';
import RoomsDetails from '../RoomsDetails';

const Home = () => {

  const  rooms= useLoaderData()
  console.log(rooms)
    return (
        <div>
          
          <Hero></Hero>
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