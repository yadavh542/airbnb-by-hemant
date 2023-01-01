import Image from 'next/image';
import React from 'react';
import { BeakerIcon, 
    MagnifyingGlassIcon,
    GlobeAltIcon,
    UserCircleIcon,
    Bars3Icon,

} from '@heroicons/react/24/solid'


const Header = () => {
  return (
    <header className='grid min-[320px]:grid-cols-3 mx-auto items-center justify-between sticky top-0 z-50 px-5 py-2 md:px-10 bg-white shadow-md'>
        {/* left - logo*/}
        
            <Image 
                src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png'
                height={80}
                width={80}
                className='object-contain cursor-pointer flex '
                alt='airbnb'
            />
        

        {/* middle - search */}
        <div className='md:border-[1.5px] md:border-gray-300 py-2 rounded-full md:shadow-sm md:hover:shadow-md transition duration-150 flex items-center justify-start'>
            <input type='text' placeholder='Start Search Here' className='outline-none text-sm text-gray-500 placeholder-gray-400 bg-transparent md:flex-grow min-[320px]:px-4 md:px-4'/>
            <MagnifyingGlassIcon className='h-6 bg-pink-500 p-1 rounded-full text-white cursor-pointer min-[320px]:hidden md:inline-flex md:mr-3'/>
        </div>

        {/* right */}
        <div className='flex space-x-2 items-center justify-end'>
            <p className='cursor-pointer min-[320px]:hidden md:inline text-gray-600 text-sm font-semibold hover:bg-gray-100 py-2 px-4 rounded-full transition duration-150'>Airbnb your home</p>
            <GlobeAltIcon className='h-10 cursor-pointer text-gray-600 hover:bg-gray-100 rounded-full p-2 transition duration-150 hidden md:inline'/>
            <div className='flex border-[1.5px] border-gray-300 rounded-full px-2 py-1 space-x-2 hover:shadow-md transition duration-150'>
                <Bars3Icon className='h-6 cursor-pointer text-gray-600'/>
                <UserCircleIcon className='h-6 cursor-pointer text-gray-600'/>
            </div>
        </div>

    </header>
  )
}

export default Header