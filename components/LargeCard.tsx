import Image from 'next/image'
import React from 'react'

const LargeCard = ({img,title,desc,btnText}:any) => {
  return (
    <div className='my-8 relative'>
        <div className='relative h-56 w-full'>
            <Image
                src={img}
                alt={title}
                layout='fill'
                className='rounded-md'
                objectFit='cover'
            />
        </div>

        <div className='absolute top-12 left-12'>
            <h4 className='text-xl font-semibold'>{title}</h4>
            <p className='text-sm my-2'>{desc}</p>
            <button className='bg-black text-white p-2 rounded-md active:scale-90 transition duration-150 text-sm'>{btnText}</button>
        </div>
    </div>
  )
}

export default LargeCard