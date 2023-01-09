//@ts-nocheck

import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header';
import {format} from 'date-fns';
import InfoCard from '../components/InfoCard';
import Map from '../components/Map';


const Search = ({searchResults}) => {
    const router = useRouter();
    const {location, startDate, endDate, noOfGuests} = router.query;

    const formattedStartDate = format(new Date(startDate),'dd MMMM yy');
    const formattedEndDate = format(new Date(endDate),'dd MMMM yy');
    const range = `${formattedStartDate} - ${formattedEndDate}`;

    const tagNames = ['Cancellation Flexibility','Type of Place','Price','Rooms and Bed','More Filters'];

  return (
    <div>
        <Header placeholder={`${location} | ${range} | ${noOfGuests} Guests`}/>
        <main className='flex'>
            {/* Stays section */}
            <section className='flex-grow pt-14 px-6'>
                <p className='text-xs'>400+ Stays {range} for {noOfGuests} Guests</p>
                <h2 className='font-semibold text-2xl my-2'>Stays in {location}</h2>
                {/* tags */}
                <div className='hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                    {tagNames.map(i=><p className='tagBtn'>{i}</p>)}
                </div>
                {/* Stays card lists */}
                <div className='flex flex-col flex-grow'> 
                {searchResults?.map(({img,location,title,description,star,price,total})=>(
                    <InfoCard
                    key={img}
                    img={img}
                    location={location}
                    title={title}
                    description={description}
                    star={star}
                    price={price}
                    total={total}
                    />
                ))}
                </div>
            </section>
            {/* Map */}
            {/* <section className='hidden lg:inline-flex'>
                <Map/>
            </section> */}
        </main>
        <Footer/>
    </div>
  )
}

export default Search

export async function getServerSideProps(){
    const searchResults = await fetch('https://www.jsonkeeper.com/b/5NPS')
    .then(response => response.json());

    return{
        props:{
            searchResults,
        },
    }
}