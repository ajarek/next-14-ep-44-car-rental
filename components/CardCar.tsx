import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card'
  import Image from 'next/image'
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
  
    <Card  className=" w-full  h-[400px]  shadow-lg rounded-lg border-2 border-red-500" >
    
    <CardHeader>
      <CardTitle>{brand}</CardTitle>
      <CardDescription className='flex  items-center gap-3'><span>{type}</span><span>{persons}</span><span>{gears}</span></CardDescription>
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
      <p>{price}</p>
    </CardFooter>
  </Card>
  
  )
}

export default CardCar