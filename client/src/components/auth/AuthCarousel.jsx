import React from 'react'

function AuthCarousel( {img, title, desc} ) {
    return (
        <div className='!flex flex-col items-center justify-center h-full mb-7'>
            <img className='w-[600px] h-[500px]' src={img} alt="" />
            <h3 className='text-4xl text-white text-center font-bold'>{title}</h3>
            <p className='mt-5 textr-2xl text-white text-center'>{desc}</p>
        </div>
    )
}

export default AuthCarousel
