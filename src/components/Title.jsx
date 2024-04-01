import React from 'react';

const Title = () => {

    return (
        <header className='flex flex-col gap-3 pb-8 border-b-2'>
            <div>
                <h1 className='text-[45px] font-semibold'>Finibus Bonorum et Malorum</h1>
            </div>
            <div className='text-[18px] flex gap-8'>
                <div className='font-medium'>
                    Written by <a className='hover:underline' href="/">John Doe</a>
                </div>
                <div className='font-light'>
                    Monday May 20
                </div>
            </div>
        </header>
    )
}

export default Title
