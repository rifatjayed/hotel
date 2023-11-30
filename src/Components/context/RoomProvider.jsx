import React, { createContext, useState } from 'react';

import Data from '../../../public/roomData.json';

export const RoomContext = createContext();


const RoomProvider = ({children}) => {
    // console.log(Data)
    const [rooms, setRooms]= useState(Data);
    return (
       <RoomContext.Provider value={{rooms}}>
        {children}
       </RoomContext.Provider>
    );
};

export default RoomProvider;