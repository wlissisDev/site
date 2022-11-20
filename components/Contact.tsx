import React from 'react'
import style from '../styles/contact.module.css';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};


type Props = {}

export default function Contact({ }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:wlissisrds@gmail?subject=${formData.subject}&body=Hi,my name is ${formData.name}. ${formData.message}
    (${formData.email})`
  }

  return (
    <div className={style.container}>
      <h3 className={style.title}>
        Contact
      </h3>

      <div className={style.content}>
        <h4 className='text-2xl font-semibold text-center'>
          Have got what you need, {""}
          <span className='decoration-[#f7ab0a]/50 underline'>Let's Talk.</span>
        </h4>

        <div className={style.info}>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
            <p>+55 (85) 98130-5644</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
            <p>wlissisrds@gmail.com</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
            <p >CEP - 61655-800</p>
          </div>
        </div>
          
          {/* FORMULÁRIO */}
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
          <div className={style.group}>
            <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
            <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
          </div>

          <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />

          <textarea {...register('message')} placeholder='Message' className='contactInput' ></textarea>
          <button className='bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold'>Submit</button>
        </form>
      </div>
    </div>
  )
}