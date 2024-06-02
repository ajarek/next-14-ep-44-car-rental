import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Wypożyczalnia samochodów</h1>
      <div className="relative w-80 h-80 bg-green-200">
        <Image
          id="img"
          alt={'title'}
          src={
            'https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/fiat-500-2d-weiss-2020.png'
          }
          width="200"
          height="200"
          className="absolute inset-0 object-cover w-full h-full rounded-lg shadow-sm"
        />
      </div>
    </main>
  )
}
