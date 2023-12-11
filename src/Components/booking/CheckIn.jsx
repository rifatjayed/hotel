import React, { useState } from 'react';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css"; 


import { FaRegCalendarAlt } from "react-icons/fa";


const CheckIn = () => {

    const [startDate, setStartDate] =useState(false)
    return (
        <div className='relative flex items-center justify-end '>
           
            <div className='absolute z-10 pr-2'>
                <div>
                    <FaRegCalendarAlt className='text-[#F28E13] text-lg	'></FaRegCalendarAlt>
                </div>
            </div>
            <DatePicker className='w-full h-full text-lg font-roboto text-[#747474] p-2.5' selected={startDate} onChange={(date) => setStartDate(date)}  placeholderText='Check In'></DatePicker>
        </div>
    );
};

export default CheckIn;