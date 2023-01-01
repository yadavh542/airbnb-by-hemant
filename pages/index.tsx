import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'

const Home: NextPage = ({exploreData,cardsData}:any) => {
  return (
    <div className="">
      <Head>
        <title>Airbnb By Hemant</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header/>
      {/* Banner */}
      <Banner/>
      {/* main */}
      <main className='max-w-5xl mx-auto px-8 sm:px-16'>
        <section>
          <h2 className='min-[320px]:text-2xl md:text-4xl font-semibold my-4'>Explore Nearby</h2>
          {/* pull data from server */}
          <div className='grid min-[320px]:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {exploreData?.map((item:any)=>(
             
            <SmallCard 
              image={item.img}
              key={item.location}
              location={item.location}
              distance={item.distance}
            />
             
          ))}</div>
        </section>

        <section>
        <h2 className='min-[320px]:text-2xl md:text-4xl font-semibold my-4'>Live Anywhere</h2>
            <div className='flex overflow-scroll scrollbar-hide'>
              {cardsData?.map(({img,title}:any)=>(
                <MediumCard
                  key={img}
                  img={img?img:'https://links.papareact.com/8ix'}
                  title={title}
                />
              ))}
            </div>
        </section>
        
        <section>
          <LargeCard
            img='https://links.papareact.com/4cj'
            title='The Greatest Outdoors'
            desc='Wishlists Created by Airbnb'
            btnText='Get Inspired'
          />
        </section>
      </main>
      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default Home

export async function getStaticProps () {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G')
  .then((response) => response.json());

  const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT')
  .then((response) => response.json());

  return { 
    props:{
      exploreData,
      cardsData
    }
  }
}
