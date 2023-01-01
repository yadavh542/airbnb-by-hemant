import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[500px] object-contain'>
        <Image
            src='https://cdn.pixabay.com/photo/2015/03/03/05/56/avenue-656969_960_720.jpg'
            alt='banner image'
            layout='fill'
            objectFit='cover'
        />
        <div className='absolute top-1/2 w-full text-center'>
            <p className='text-white min-[320px]:text-sm md:text-lg shadow-lg font-bold'>Not sure where to go ? Perfect</p>
            <button className='text-purple-500 bg-white py-4 px-10 rounded-full shadow-md hover:shadow-xl font-bold my-4 active:scale-90 transition duration-150'>I'm flexible</button>
        </div>
    </div>
  )
}

export default Banner