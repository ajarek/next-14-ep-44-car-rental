import CardCar from '@/components/CardCar'
import data from '@/public/data/data.json'

const Garage = () => {
  return (
    <div className="min-h-screen w-full flex   flex-col items-center p-12 gap-4">
      <h1 className='text-2xl font-semibold '>KTÓRY POJAZD CHCESZ PROWADZIĆ?</h1>
      <div className="w-full grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-8 place-items-center  ">
        {data.map((car) => (
          <CardCar key={car.id} brand={car.brand} image={car.image} price={car.price} type={car.type} persons={car.persons} gears={car.gears} />
        ))}
       
      </div>
    </div>
  )
}

export default Garage
