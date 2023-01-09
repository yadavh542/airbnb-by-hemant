//@ts-nocheck

import Image from 'next/image';
import React, { useState } from 'react';
import { BeakerIcon, 
    MagnifyingGlassIcon,
    GlobeAltIcon,
    UserCircleIcon,
    Bars3Icon,
    UsersIcon,
} from '@heroicons/react/24/solid';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';


const Header = ({placeholder}:any) => {
    const[searchInput,setSearchInput] = useState('');
    const[startDate,setStartDate] = useState(new Date());
    const[endDate,setEndDate] = useState(new Date());
    const[noOfGuests,setNoOfGuests] = useState(1);
    const router = useRouter();

    const selectionRange={
        startDate:startDate,
        endDate:endDate,
        key:'Selection',
    }

    const handleSelect = (ranges:any)=>{
        setStartDate(ranges.Selection.startDate);
        setEndDate(ranges.Selection.endDate);
    }

    const search = ()=>{

        if(searchInput){ 
        router.push({
            pathname:'/search',
            query:{
                location:searchInput,
                startDate:startDate.toISOString(),
                endDate:endDate.toISOString(),
                noOfGuests,
            }
        })}
    }

  return (
    <header className='grid min-[320px]:grid-cols-3 mx-auto items-center justify-between sticky top-0 z-50 px-5 py-2 md:px-10 bg-white shadow-md'>
        {/* left - logo*/}
        
            <Image 
                src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png'
                height={80}
                width={80}
                className='object-contain cursor-pointer flex '
                alt='airbnb'
                onClick={()=>router.push('/')}
            />
        

        {/* middle - search */}
        <div className='md:border-[1.5px] md:border-gray-300 py-2 rounded-full md:shadow-sm md:hover:shadow-md transition duration-150 flex items-center justify-start'>
            <input 
            value={searchInput}
            onChange={(e)=>setSearchInput(e.target.value)}
            type='text' 
            placeholder={placeholder || 'Start Search Here'} 
            className='outline-none text-sm text-gray-500 placeholder-gray-400 bg-transparent md:flex-grow min-[320px]:px-4 md:px-4'/>
            <MagnifyingGlassIcon 
            onClick={search}
            className='h-6 bg-[#FD5B61] p-1 rounded-full text-white cursor-pointer min-[320px]:hidden md:inline-flex md:mr-3'/>
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

        {/* Calender after Search */}
        {searchInput && <div className='flex flex-col col-span-3 mx-auto'>
            <DateRangePicker
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={['#FD5B61']}
                onChange={handleSelect}
            />
            {/* select no. of guests */}
            <div className='flex items-center border-b mb-4'>
                <h2 className='font-semibold text-xl px-4 flex-grow'>Number of Guests</h2>
                <UsersIcon className='h-5 w-5'/>
                <input type='number' 
                value={noOfGuests}
                onChange={(e:any)=>setNoOfGuests(e.target.value)}
                min={1}
                placeholder='0'
                className='outline-none w-16 ml-2 px-1 text-lg text-[#FD5B61]'/>
            </div>
            {/* cancel & search */}
            <div className='flex justify-evenly items-center'>
                <button 
                onClick={()=>setSearchInput("")}
                className='hover:bg-black hover:text-white px-4 py-1 rounded-full active:scale-90 transition duration-200 font-semibold'>Cancel</button>
                <button 
                onClick={search}
                className='hover:bg-[#FD5B61] hover:text-white px-4 py-1 rounded-full active:scale-90 transition duration-200 font-semibold text-[#FD5B61]'>Search</button>
            </div>
        </div> }

    </header>
  )
}

export default Header