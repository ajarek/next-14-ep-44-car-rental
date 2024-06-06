import Modal from '@/components/Modal'
import Image from 'next/image'

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center justify-between px-24 py-12">
      <div className=' '>
        <Image src="/images/baner-car.jpg" alt="baner" width={1400} height={625}  />
      </div>
     <Modal/>
    
    </main>
  )
}
