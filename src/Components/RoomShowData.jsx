import React, { useContext } from 'react';
import { roomContext } from './pages/Home';

const RoomShowData = () => {
 

    const data= useContext(roomContext)
    // const {roomName,description,roomSize}= room;
    return (
        <div>
            <h1>name {data}</h1>
        </div>
    );
};

export default RoomShowData;