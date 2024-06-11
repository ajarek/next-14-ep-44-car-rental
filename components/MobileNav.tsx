'use client'

import { Menu } from 'lucide-react'
import Link from 'next/link'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetHeader,
} from '@/components/ui/sheet'
import Image from 'next/image'

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu size={36} />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="border-none bg-card text-card-foreground  shadow-none lg:hidden"
      >
        <SheetHeader>
          <Link href="/" className="flex items-center gap-2 max-sm-gap-1">
            <Image src="/images/logo.png" width={133} height={50} alt="logo" />
            <h1 className="font-semibold text-xl ">Auto na Teraz</h1>
          </Link>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
