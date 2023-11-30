import React from 'react';
import CheckIn from './booking/CheckIn';
import CheckOut from './booking/CheckOut';
import Adults from './booking/Adults';
import Children from './booking/Children';

const BookForm = () => {
    return (
        <div>
            <form className='h-[120px] w-full bg-[#0083CA]'>
                <div className='flex  w-full'>
                    <div className='flex-1 border-r'>
                        <CheckIn></CheckIn>
                    </div>
                    <div className='flex-1 border-r'>
                        <CheckOut></CheckOut>
                    </div>
                    <div className='flex-1 border-r'>
                        <Adults></Adults>
                    </div>
                    <div className='flex-1 border-r'>
                        <Children></Children>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BookForm;