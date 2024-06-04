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
    <>
     <div>
       
      </div>
    <Card  className="relative w-[300px]  h-[400px]  shadow-lg rounded-lg " >
    
    <CardHeader>
      <CardTitle>{brand}</CardTitle>
      <CardDescription className='flex  items-center gap-3'><span>{type}</span><span>{persons}</span><span>{gears}</span></CardDescription>
    </CardHeader>
    <CardContent>
    <Image
          alt={'title'}
          src={image}
          width="200"
          height="200"
          className="w-full  object-cover  "
        />
    </CardContent>
    <CardFooter>
      <p>{price}</p>
    </CardFooter>
  </Card>
  </>
  )
}

export default CardCar