import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card'
  import Image from 'next/image'
import Link from 'next/link'
type PropsCar={
  brand:string
  type:string
  price:number
  persons:string
  gears:string
  image:string
}
const CardCar = ({brand, type, price, persons, gears, image}:PropsCar) => {
  return (
  
    <Card  className=" w-full  h-auto  shadow-xl rounded-lg border-2  bg-gradient-to-r from-blue-500 to-blue-600" >
    <Link href={`/cars/${brand}`}>
    <CardHeader>
      <CardTitle>{brand}</CardTitle>
      <CardDescription className='flex  items-center gap-3 text-primary'><span>{type}</span><span>{persons}</span><span>{gears}</span></CardDescription>
    </CardHeader>
    <CardContent className='   '>
    <Image
          alt={'title'}
          src={image}
          width="400"
          height="200"
          className=" w-full  h-full  object-cover  rounded-lg p-4 "
        />
    </CardContent>
    <CardFooter>
      <p className='text-xl font-semibold'>{price.toFixed(2)} PLN</p>
    </CardFooter>
    </Link>
  </Card>
  
  )
}

export default CardCar