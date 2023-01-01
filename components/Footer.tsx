//@ts-nocheck
import React from 'react'

const Footer = () => {
    const footerData = {
        title1:'Airbnb',
        title1Data:[
            'How Airbnb Works',
            'Newsroom',
            'Investors',
            'Airbnb Plus',
            'Careers',
        ],
        title2:'Hosting',
        title2Data:[
            'Airbnb your home',
            'Air Cover for Hosts',
            'Explore Hosting Resources',
            'Visit our community forum',
            'How to Host Responsibility',
        ],
        title3:'Community',
        title3Data:[
            'Airbnb.org:disaster relief housing',
            'Combating descriminations',
        ],
        title4:'Suport',
        title4Data:[
            'Air Cover',
            'Help Center',
            'Suporting people with disabilities',
            'Cancellation Options',
            'Our Covid 19 response',
            'report a neighbourhood concern',
        ],
    }
  return (
    <div className='grid min-[320px]:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 min-[320px]:px-8 lg:px-16 py-8 bg-gray-100'>
        {/* footer column 1 */}
        <div className='mb-4'>
            <h4 className='font-semibold mb-2'>{footerData.title1}</h4>
            {footerData.title1Data.map(a=>(
                <p className='text-sm text-gray-600
                cursor-pointer my-1 hover:text-black'>{a}</p>
            ))}
        </div>
        {/* footer column 2 */}
        <div className='mb-4'>
        <h4 className='font-semibold mb-2'>{footerData.title2}</h4>
            {footerData.title2Data.map(a=>(
                <p className='text-sm text-gray-600
                cursor-pointer my-1 hover:text-black'>{a}</p>
            ))}
        </div>
        {/* footer column 3 */}
        <div className='mb-4'>
        <h4 className='font-semibold mb-2'>{footerData.title3}</h4>
            {footerData.title3Data.map(a=>(
                <p className='text-sm text-gray-600
                cursor-pointer my-1 hover:text-black'>{a}</p>
            ))}
        </div>
        {/* footer column 4 */}
        <div className='mb-4'>
        <h4 className='font-semibold mb-2'>{footerData.title4}</h4>
            {footerData.title4Data.map(a=>(
                <p className='text-sm text-gray-600
                 cursor-pointer my-1 hover:text-black'>{a}</p>
            ))}
        </div>
    </div>
  )
}

export default Footer