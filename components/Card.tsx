import React from 'react'
type CardProps = {
    type: 'artist' | 'card'
    imageUrl: string
    title: string
    subtitle: string
}

const Card = ({type, imageUrl, title, subtitle} : CardProps) => {
   
  return (
    <div className='w-[200px] h-[250px] flex gap-3 flex-col p-2 rounded-md items-center hover:bg-gradient-to-b from-gray-900 to-gray-800 cursor-pointer'>
         {
          type === 'artist' ? (
            <div className="bg-center" style={{
              width: '170px',
              height: '170px',
              borderRadius: '50%',
              overflow: 'hidden',
              backgroundSize: 'cover',
              backgroundImage: `url(${imageUrl})`
            }}/>
          ):(
            <div className="bg-center" style={{
              width: '170px',
              height: '170px',
              borderRadius: '10px',
              overflow: 'hidden',
              backgroundSize: 'cover',
              backgroundImage: `url(${imageUrl})`
            }}/>
          )
        }
      <span className="text-base">{title}</span>
      <span className="text-xs">{subtitle}</span> 

    </div>
  )
}

export default Card