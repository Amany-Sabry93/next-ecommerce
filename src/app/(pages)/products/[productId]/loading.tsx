import React from 'react'

export default function Loading() {
  return <>
  <main>
    <div className='min-h-[80vh] flex items-center justify-center bg-fuchsia-100'>
        <div className='flex flex-col justify-between items-center'>
            {/* Trendy Buy Logo */}
            <div className='flex items-center justify-center mb-8'>
                <div className='w-12 h-12 bg-gray-600 flex items-center justify-center mr-3'>
                    <span className='text-white font-bold text-2xl'>T</span>

                </div>
                <span className='font-bold text-3xl text-gray-500'>TrendyBuy</span>


            </div>
            {/* Spinner */}
            <div className='relative w-16 h-16 flex items-center justify-center'>
                <div className='w-16 h-16 border-4 border-fuchsia-200 border-t-fuchsia-950 rounded-full animate-spin mx-auto absolute inset-0'>
                <div className='w-12 h-12 border-4 border-fuchsia-100 border-b-fuchsia-700 rounded-full animate-spin-slow absolute inset-1 transform -translate-0.5'></div>

                </div>
            </div>

        </div>
    


    </div>






    
  </main>
  
  
  
  </>
    
  
}
