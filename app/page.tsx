import Card from '@/components/Card'
import { artists } from '@/constants'
import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col gap-5 p-4'>
      <span className='text-3xl font-bold'>
        Popular Artists
      </span>
      <div className='flex justify-between flex-wrap gap-5'>
      {
        artists.map((artist)=>(
          <Card
          type='artist'
          imageUrl={artist.imageUrl}
          title={artist.name}
          subtitle='Artist'
          />
        ))
      }
     
      </div>
    </div>
  )
}

export default Home