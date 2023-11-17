import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import RoomsDetails from '../RoomsDetails';

const Rooms = () => {
    const rooms = useLoaderData()

    console.log(rooms)


    const [showMore, setShowMore] = useState(false)
    return (
        <div>
            <div className='px-32 text-center'>
                 <h1 className='text-5xl	font-semibold	my-7'>Stay with luxury at Sea Pearl</h1>
            <p className='font-medium	text-lg	font-medium		'>This largest eco-resort in Bangladesh boasts of 493 splendid rooms and suites with breathtaking sea and hill views. Lavishly appointed our rooms offer the ultimate in comfort. Our elaborate suites are embellished with kitchenette, Jacuzzi, and Infinity Pool for those who command luxury.</p> 
            </div>
          

            <div className='grid grid-cols-3 gap-4 justify-items-center '>
                {
                    rooms.slice(0, 9).map(room => <RoomsDetails
                        key={room.id}
                        room={room}
                    ></RoomsDetails>)
                }

                {showMore ? (
                    rooms.slice(9).map(room => <RoomsDetails
                        key={room.id}
                        room={room}
                    ></RoomsDetails>)
                ) : null}

                {!showMore &&
                    (<div className=' my-5'>
                        <p className='btn' onClick={() => { setShowMore(true) }}>See All Rooms</p>
                    </div>)}
            </div>
        </div>
    );
};

export default Rooms;