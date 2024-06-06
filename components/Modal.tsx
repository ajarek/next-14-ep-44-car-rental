'use client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import React from 'react'
import { Label } from './ui/label'
import DatePickerWithRange from '@/components/DatePickerWithRange'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'

const Modal = () => {
  const router = useRouter()
  const { toast } = useToast()
  
  const toastAlert = () => {
    toast({
      variant: 'destructive',
      title: 'Oj! Coś poszło nie tak.',
      description: 'Proszę poprawnie wypełnić wszystkie pola!',
      action: <ToastAction altText='Try again'>Spróbuj ponownie</ToastAction>,
    })
  }
    
  const handleSubmit = (e: any) => {
    e.preventDefault()
    const today = new Date()
    const first = new Date(e.target[2].innerText)
    const second = new Date(e.target[3].innerText)
    const period = (second.getTime() - first.getTime()) / (1000 * 60 * 60 * 24)
    const todayDate = first.getDate() - today.getDate()

    if (
      todayDate >= 0 &&
      period > 0 &&
      e.target[2].innerText !== 'Pick a date' &&
      e.target[3].innerText !== 'Pick a date' &&
      e.target[1].value
    ) {
      router.push(
        `/garage/?firstDate=${e.target[2].innerText}&secondaryDate=${e.target[3].innerText}&city=${e.target[1].value}`
      )
    } else {
      
      toastAlert()
    }
  }
  return (
    <div className="fixed top-20 w-3/4   flex  flex-col items-center justify-center gap-4 border-2 border-blue-900 p-4 rounded-lg">
      <h1 className=" w-full text-xl text-left ">Wynajmij samochód</h1>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        <div className="w-full flex flex-col gap-4">
          <Label htmlFor="city">Odbiór i zwrot</Label>
          <Select defaultValue="" name="city " required>
            <SelectTrigger className="">
              <SelectValue
                placeholder="Wybierz Miejscowość"
                className="text-red-500"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="kolobrzeg">Kołobrzeg PKP</SelectItem>
              <SelectItem value="szczecin">Szczecin PKP</SelectItem>
              <SelectItem value="gdansk">Gdańsk PKP</SelectItem>
              <SelectItem value="warszawa">Warszawa PKP</SelectItem>
              <SelectItem value="krakow">Kraków PKP</SelectItem>
              <SelectItem value="wroclaw">Wrocław PKP</SelectItem>
              <SelectItem value="poznan">Poznań PKP</SelectItem>
              <SelectItem value="lodz">Łódź PKP</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center justify-between w-full flex-wrap gap-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="date">Data odbioru</Label>
            <DatePickerWithRange />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="date">Data zwrotu</Label>
            <DatePickerWithRange />
          </div>
          <div className="flex flex-col mt-5 ">
            <Button className=" ">Wybierz Samochód</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Modal
