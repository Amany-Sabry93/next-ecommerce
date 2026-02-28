import Image from 'next/image'
import React from 'react'
import image1 from '../../public/error.svg'
export default function NotFound() {
  return <>
  <div className='container mx-auto flex items-center justify-center py-17 bg-fuchsia-100'>
    <Image src={image1}  alt='not found image' className='w-1/2'/>

  </div>

  
  
  </>

  
}
