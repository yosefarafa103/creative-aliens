import React from 'react'
import Button from './Button'

const Project = ({ img, title, title2, dir = 'rtl' }) => {
    return (
        <>
            <section className={`flex max-[576px]:flex-col  items-center mt-[20px] border-solid border-l-transparent border-[2px] py-[2px] border-r-transparent border-[#333] h-[50vh] ${dir === 'ltr' && 'flex-row-reverse'}`}>
                <div className='flex-1 w-full h-full flex items-end  py-[2px]'>
                    <img src={img.src} className='max-[576px]:max-h-[200px] w-full h-full object-cover ' loading='lazy' alt="" />
                </div>
                <div className='flex-1 px-[6vw] h-full py-[3vw]'>
                    <section className='flex flex-col justify-between h-full'>
                        <h3 className="text-[2.5vw] uppercase font-[300] text-[#001524] w-full tracking-[2px]">{title}</h3>
                        <div className='flex flex-col gap-4'>
                            <h2 className='uppercase font-[400] text-[#001524] text-[4.5vw]'>{title2}</h2>
                            <p className='text-[#444] '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, voluptatum!</p>
                        </div>
                        <Button />
                    </section>
                </div>
            </section>
        </>
    )
}

export default Project