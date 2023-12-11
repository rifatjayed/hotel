import React from 'react';
import { MdFamilyRestroom } from "react-icons/md";

const Children = () => {
    return (
        <div>
        <div className='relative flex items-center justify-end '>
            <div className='absolute z-10 pr-2'>
                <div>

                    <MdFamilyRestroom className='text-[#F28E13] text-lg' />
                </div>
            </div>
            <div>
            

                <select class="w-[250px]  block appearance-none f-full text-lg font-roboto text-[#747474] bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">

                    <option>Children 1</option>
                    <option>Children 2</option>
                    <option>Children 3</option>
                    <option>Children 4</option>
                </select>
            </div>



        </div>
    </div>
    );
};

export default Children;