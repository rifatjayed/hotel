import React, { useContext } from 'react';
import { roomContext } from './Home';

const Service = () => {
    const serviceDimu= useContext(roomContext)
    return (
        <div>
               <h1>This is Service Page{serviceDimu}</h1>
        </div>
    );
};

export default Service;