import React from 'react'
import type { PropsCar } from '@/components/CardCar'
import Image from 'next/image'
const Car = ({searchParams}: {searchParams: PropsCar}) => {

  const {brand, type, price, persons, gears, image, firstDate, secondaryDate, city }= searchParams

  return (
    <div className='min-h-[calc(100vh-64px)] p-24 flex flex-col justify-center items-center '>
      <h1>{brand}</h1>
      <p>{type}</p>
      <p>{price}</p>
      <p>{persons}</p>
      <p>{gears}</p>
      <p>{firstDate}</p>
      <p>{secondaryDate}</p>
      <p>{city}</p>
      <Image src={image} alt={brand} width={300} height={300} />
    </div>
  )
}

export default Car