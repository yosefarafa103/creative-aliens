"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars } from "react-icons/fa6";
import NavBarMobile from './NavBarMobile';
const Header = () => {
    const [active, setActive] = useState(0)
    const [mobileNav, setMobileNav] = useState(false)
    return (
        <header className='px-[5vw] py-[3vw] pb-[0] z-[9999] fixed top-0 left-0 w-full bg-[#FaF7F0]'>
            <section className='flex items-center justify-between pb-[20px] border-solid border-b-[2px] border-b-[#ddd]'>
                <div>
                    <a href="" className='text-[2.8]'>Creative Aliens</a>
                </div>
                <div className='flex gap-[3.5vw]'>
                    <motion.div layout className='flex gap-[4.5vw] max-[768px]:hidden items-center'>
                        {["About", "Services", "Case Studies", "Blog"].map((e, idx) => (
                            <div className='relative' key={e}>
                                <motion.div onClick={() => setActive(idx)} style={{ display: 'inline-block' }} className='cursor-pointer relative after: after: after: after:-400 after: z-[10] after:z-[9] bg-[#FaF7F0] px-[15px] py-[5px]'>
                                    <motion.span
                                        initial={{ y: 30, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.4, type: 'tween', delay: idx * 0.1 }}
                                        className='translate-y-[0] block'>
                                        {e}
                                    </motion.span>
                                </motion.div>
                                {idx === active &&
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.4, delay: 0.4 }}
                                        className='absolute -bottom-[8px] left-1/2 -translate-x-1/2 block bg-green-500 w-[15px] h-[15px] bg-green rounded-[50%]'></motion.span>
                                }
                            </div>
                        ))}
                    </motion.div>
                    <motion.div>
                        <motion.span className=''>
                        </motion.span>
                    </motion.div>
                    <section className='flex items-center gap-[2vw]'>
                        <a href="" className='border-sold border-[2px] px-[3vw] py-[0.8vw] bg-[#FaF7F0] border-black rounded-[50px]'>Hire Us</a>
                        <motion.span whileTap={{ border: '2px solid #000' }} onClick={() => setMobileNav(prev => !prev)} className='w-[40px] min-[576px]:hidden h-[40px] flex items-center cursor-pointer justify-center text-[22px]'>
                            <FaBars />
                        </motion.span>
                    </section>
                    <AnimatePresence mode='wait'>
                        {mobileNav &&
                            <NavBarMobile />
                        }
                    </AnimatePresence>
                </div>
            </section>
        </header>
    )
}

export default Header