import CardCar from '@/components/CardCar'
import data from '@/public/data/data.json'

const Garage = () => {
  return (
    <div className="min-h-screen w-full flex   flex-col items-center 
    ">
      <h1>Garage</h1>
      <div className="w-full grid grid-cols-2  gap-4 bg-red-300  ">
        {data.map((car) => (
          <CardCar key={car.id} brand={car.brand} image={car.image} price={car.price} type={car.type} persons={car.persons} gears={car.gears} />
        ))}
       
      </div>
    </div>
  )
}

export default Garage
