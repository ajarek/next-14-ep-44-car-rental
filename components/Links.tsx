import Image from 'next/image'
import Link from 'next/link'

const Links = () => {
  return (
    <div className="max-lg:hidden w-full flex items-center justify-between  ">
      <Link href="/" className="flex items-center gap-2 max-sm-gap-1">
        <Image src="/images/logo.png" width={133} height={50} alt="logo" />
        <h1 className="font-semibold text-xl ">Auto na Teraz</h1>
      </Link>
    </div>
  )
}

export default Links
