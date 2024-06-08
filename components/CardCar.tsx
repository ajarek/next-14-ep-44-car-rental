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
export type PropsCar = {
  brand: string
  type: string
  price: number
  persons: string
  gears: string
  image: string
  firstDate: string
  secondaryDate: string
  city: string
}
import { Car, Cog, PersonStanding } from 'lucide-react'

const CardCar = ({
  brand,
  type,
  price,
  persons,
  gears,
  image,
  firstDate,
  secondaryDate,
  city,
}: PropsCar) => {
  return (
    <Card className=" w-full  h-auto  shadow-xl rounded-xl border-2 border-primary">
      <Link
        href={`/car/?firstDate=${firstDate}&secondaryDate=${secondaryDate}&city=${city}&price=${price}&brand=${brand}&type=${type}&persons=${persons}&gears=${gears}&image=${image}`}
      >
        <CardHeader className='flex flex-col gap-8'>
          <CardTitle>{brand}</CardTitle>

          <div className="flex  items-center gap-4 ">
            <div className="flex items-center gap-1">
              <Car />
              {type}
            </div>
            <div className="flex items-center gap-1">
              <PersonStanding />
              {persons}
            </div>
            <div className="flex items-center gap-1">
              <Cog />
              {gears}
            </div>
          </div>
        </CardHeader>
        <CardContent className="   ">
          <Image
            alt={'title'}
            src={image}
            width="316"
            height="211"
            className=" w-full  h-full  object-cover  rounded-lg "
          />
        </CardContent>
        <CardFooter>
          <p className="text-xl font-semibold">{price.toFixed(2)} PLN</p>
        </CardFooter>
      </Link>
    </Card>
  )
}

export default CardCar
