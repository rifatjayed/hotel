import React, { useState } from 'react';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css"; 


import { FaRegCalendarAlt } from "react-icons/fa";




const CheckOut = () => {
    
    const [endDate, setEndDate] =useState(false)
    return (
        <div>
         <div className='relative flex items-center justify-end h-full '>
           
           <div className='absolute z-10 pr-2'>
               <div>
                   <FaRegCalendarAlt className='text-[#F28E13] text-lg	'></FaRegCalendarAlt>
               </div>
           </div>
           <DatePicker className='w-full h-full text-lg font-roboto text-[#747474] p-2.5' selected={endDate} onChange={(date) => setEndDate(date)}  placeholderText='Check Out'></DatePicker>
       </div>
        </div>
    );
};

export default CheckOut;