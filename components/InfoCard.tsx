//@ts-nocheck

import React from 'react';
import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/24/outline';
import {StarIcon} from '@heroicons/react/24/solid';

const InfoCard = ({img,location,title,description,star,price,total}) => {
  return (
    <div className='py-4 flex flex-grow items-center rounded-lg border-b hover:shadow-lg transition duration-200 hover:opacity-80 first:border-t'>
        {/* image */}
        <div className='relative h-[150px] w-[150px] md:h-[200px] md:w-[250px] flex-shrink-0 cursor-pointer'> 
        <Image
        src={img}
        layout='fill'
        objectFit='cover'
        className='rounded-lg'
        />
        </div>
        {/* content */}
        <div className='flex flex-grow px-4 flex-col'>
            <div className='flex items-center'>
                <p className='flex-grow text-xs text-gray-500'>{location}</p>
                <HeartIcon className='h-6 cursor-pointer'/>
            </div>
            <h4 className='text-lg md:text-xl font-semibold cursor-pointer'>{title}</h4>
            <div className='border-b w-10 my-1 md:my-4'/>
            <p className='text-xs text-gray-600 flex-grow'>{description}</p>
            {/* bottom */}
            <div className='flex'>
                <p className='flex items-center flex-grow text-sm text-gray-500'>
                    <StarIcon className='h-6 text-red-400'/>{star}
                </p>
                <div>
                    <p className='text-xs md:text-lg text-gray-900 font-semibold'>{price}</p>
                    <p className='text-xs md:text-sm text-gray-500'>{total}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoCard