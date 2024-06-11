import Modal from '@/components/Modal'
import Image from 'next/image'
import { Globe, CarFront, HandHeart } from 'lucide-react'

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center justify-between  pb-12 max-sm:py-24">
      <div className="relative">
        <Image
          src="/images/baner-car.jpg"
          alt="baner car"
          width={1400}
          height={625}
        />
        <Modal />
      </div>

      <div className="w-full text-center bg-primary p-8 max-sm:mt-24">
        <h2 className=" h2">WYNAJMIJ AUTO PREMIUM.</h2>
        <h2 className="h2">ZAPŁAĆ JAK ZA EKONOMICZNE.</h2>
        <p>
          Wypożyczalnia samochodów premium w najlepszych cenach. W całym kraju.
        </p>
      </div>

      <div className="w-full grid grid-cols-3 gap-4 px-24 max-sm:px-4 py-8 max-lg:grid-cols-1">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <Globe color="#2563eb" />
            <p>Zasięg cały kraj</p>
          </div>

          <h2 className="h2">
            Ponad 2 000 punktów SIXT <br /> w ponad 105 krajach
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <CarFront color="#2563eb" />
            <p>Szeroka flota</p>
          </div>
          <h2 className="h2">
            Od klasy ekonomicznej po <br /> luksusowe SUV-y
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <HandHeart color="#2563eb" />
            <p>Wyjątkowa obsługa</p>
          </div>
          <h2 className="h2">
            Godna zaufania, bez <br /> ukrytych kosztów, bez <br /> stresu
          </h2>
        </div>
      </div>
    </main>
  )
}
