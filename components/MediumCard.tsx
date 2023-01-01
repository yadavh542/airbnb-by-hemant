import Image from 'next/image'
import React from 'react'

const MediumCard = ({img,imgName,title}:any) => {
  return (
    <div className='m-2 rounded-md hover:scale-105 ease-out transform transition duration-300 cursor-pointer'>
        <div className='relative h-40 w-40'>
            <Image
                src={img}
                alt={imgName}
                layout='fill'
                className='rounded-md'
            />
        </div>
        <h4 className='text-gray-600 font-semibold my-2 text-center'>{title}</h4>
    </div>
  )
}

export default MediumCard