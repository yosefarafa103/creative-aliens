import { motion, useAnimate, useAnimationControls } from 'framer-motion'
const NavBarMobile = () => {
    return (
        <motion.section
            initial={{ scaleY: 0, height: 'calc(100vh-66px)', padding: '25vw' }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.4, ease: [0, 0.55, 0.45, 1], delay: 0.4 }}
            exit={{ scaleY: 0 }}
            className="fixed flex flex-col gap-[15vw] origin-top-left items-center z-[99999] w-full h-[calc(100vh-66px)] top-[calc(46px+5vw)] left-0 bg-[#dda15e]">
            {["About", "Services", "Case Studies", "Blog"].map((e, idx) => (
                <motion.div
                    initial={{ scaleY: 0, }}
                    animate={{ scaleY: 1 }}
                    exit={{ scaleY: 0, }}
                    transition={{ duration: 0.4, ease: [0, 0.55, 0.45, 1], }}
                    className='relative w-full flex items-center justify-center'>
                    <motion.div style={{ display: 'inline-block' }} className='text-center origin-top-left text-white uppercase text-[6vw] cursor-pointer w-[100%] overflow-hidden  relative  px-[15px] py-[5px]'>
                        <motion.span
                            initial={{ y: 100, }}
                            animate={{ y: 0, }}
                            exit={{ y: 100, }}
                            transition={{ duration: 1, ease: 'linear', delay: 0.5 }}
                            className='translate-y-[0] block'>
                            {e}
                        </motion.span>
                    </motion.div>
                </motion.div>
            ))}
        </motion.section>
    )
}

export default NavBarMobile