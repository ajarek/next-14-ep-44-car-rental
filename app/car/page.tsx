import React from 'react'
import type { PropsCar } from '@/components/CardCar'
import Image from 'next/image'
import  Link  from 'next/link'
const Car = ({ searchParams }: { searchParams: PropsCar }) => {
  const {
    brand,
    type,
    price,
    persons,
    gears,
    image,
    firstDate,
    secondaryDate,
    city,
  } = searchParams
  const first = new Date(firstDate)
  const second = new Date(secondaryDate)
  const period = (second.getTime() - first.getTime()) / (1000 * 60 * 60 * 24)
  return (
    <div className="min-h-[calc(100vh-64px)] px-24 py-12 flex flex-col justify-center items-center ">
      <div className='w-full grid grid-cols-2 gap-8'>
        <div className='border-2 border-primary rounded-xl'>
          <Image src={image} alt={brand} width={632} height={422} />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className='text-3xl font-bold'>{brand}</h1>
          <p>typ nadwozia: {type==="sedan"?'Sedan':'Kombi'}</p>
          <p>{persons}  {Number(persons)>4 ? 'miejsc' : 'miejsca'}</p>
          <p>typ napędu: {gears==='Manual'?'Manualny':'Automat'}</p>
          <p>Okres wynajmu: od {firstDate} do {secondaryDate}</p>
          <p>Ilość dni: {period}</p>
          <p className='capitalize'>Miejsce odbioru i zwrotu: {city}</p>
          <p>{Number(price).toFixed(2) } PLN/doba</p>
          <p className=''><span className='p'>Do zapłaty: </span>{(Number(price)*period).toFixed(2)} PLN</p>
          <Link href={`/checkout?total=${(Number(price)*period).toFixed(2)}`} className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2' >Płacę</Link>
        </div>
      </div>
    </div>
  )
}

export default Car
