import CardCar from '@/components/CardCar'
import data from '@/public/data/data.json'

const Garage = () => {
  return (
    <div className="min-h-screen w-full flex   flex-col items-center p-12">
      <h1>Garage</h1>
      <div className="w-full grid grid-cols-3  gap-8 place-items-center  ">
        {data.map((car) => (
          <CardCar key={car.id} brand={car.brand} image={car.image} price={car.price} type={car.type} persons={car.persons} gears={car.gears} />
        ))}
       
      </div>
    </div>
  )
}

export default Garage
