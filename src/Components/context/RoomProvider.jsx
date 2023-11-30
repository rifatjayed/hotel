import React, { createContext, useState } from 'react';

import Data from '../../../public/roomData.json';

export const RoomContext = createContext();


const RoomProvider = ({children}) => {
    // console.log(Data)
    const [rooms, setRooms]= useState(Data);
    const [adults, setAdults]= useState('1 Adults');
  const [kids, setKids]= useState('0 Kids')
    const[total, setTotal]= useState(2)
    // console.log(`adults${adults}, kids ${kids}`)
    return (
       <RoomContext.Provider value={{rooms, adults, setAdults, kids, setKids}}>
        {children}
       </RoomContext.Provider>
    );
};

export default RoomProvider;