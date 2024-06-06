'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Links = () => {
  const pathname = usePathname()
  return (
    <div className="max-lg:hidden w-full flex items-center justify-between  ">
      <Link href="/" className="flex items-center gap-2 max-sm-gap-1">
        <Image src="/images/logo.png" width={133} height={50} alt="logo" />
        <h1 className="font-semibold text-xl ">Auto na Teraz</h1>
      </Link>

      {/* <Link
        href="/garage"
        className={`flex items-center gap-4 hover:bg-primary hover:text-primary-foreground hover:rounded-sm  rounded-sm px-4 py-1 transition ${
          pathname === '/garage' ? 'active ' : 'px-4'
        }`}
      >
        Nasz Garaż
      </Link> */}
    </div>
  )
}

export default Links
