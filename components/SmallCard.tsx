import Image from 'next/image'
import React from 'react'

const SmallCard = ({image,imageName,location,distance}:any) => {
  return (
    <div className='flex cursor-pointer items-center m-2 p-2 hover:scale-110 transition duration-150 ease-out rounded-md hover:bg-gray-100'>
        <div className='relative h-16 w-16'> 
        <Image
            src={image}
            alt={imageName}
            layout='fill'
            className='rounded-md'
        />
        </div>
        <div className='mx-4'>
            <h4 className='text-md font-semibold'>{location}</h4>
            <p className='text-sm font-semibold text-gray-500'>{distance}</p>
        </div>
    </div>
  )
}

export default SmallCard