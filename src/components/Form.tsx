'use client'

import { useState } from 'react'
import { toast, Toaster } from 'sonner'

export default function Form () {
  const [isLoading, setIsLoading] = useState(false)

  const hadleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setIsLoading(true)
    const data = event.target as HTMLFormElement
    const emailData = Object.fromEntries(new FormData(data).entries())
    fetch('/api/email', { method: 'POST', body: JSON.stringify(emailData) })
      .then(async res => {
        if (!res.ok) {
          throw new Error('Unexpeted Error')
        }
        return await res.json()
      })
      .then(data => {
        toast.success('Email enviado')
        console.log({ data })
      })
      .catch(err => {
        console.error(err)
      }).finally(() => {
        data.reset()
        setIsLoading(false)
      })
  }

  return (
        <form onSubmit={hadleSubmit} className='flex flex-col w-full gap-y-2'>
        <Toaster richColors />
        <div className='input-container'>
          <input required type="text" name='name'/>
          <span className='label-form '>Nombre</span>
        </div>

        <div className='input-container'>
          <input required type="text" name='email'/>
          <span className='label-form '>Email</span>
        </div>

        <div className='input-container'>
          <textarea required name="message"
          className='resize-none p-2  h-28 '></textarea>
          <span className='label-form '>Mensaje</span>
        </div>
        <button type="submit" className='bg-brand-secondary text-brand  mt-2 px-2 py-2 w-1/2 m-auto rounded-sm hover:bg-brand-secondary/80'>
            {
                isLoading
                  ? <div className="w-6 h-6 rounded-full border-2 m-auto border-l-transparent animate-spin border-white"></div>
                  : 'Enviar'
            }
        </button>
      </form>
  )
}
