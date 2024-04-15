import Heading from './Heading'
import Project from './Project'
import TemplateOne from './TemplateOne'
import { motion, AnimatePresence } from "framer-motion"
import img1 from '@/app/assets/dm-david-jEPsZv8IM18-unsplash.jpg'
import img2 from '@/app/assets/patrick-hendry-JNKzAvnpw0A-unsplash.jpg'
import img3 from '@/app/assets/claudio-schwarz-1UReRFn0xNk-unsplash.jpg'
import img4 from '@/app/assets/hal-gatewood-tZc3vjPCk-Q-unsplash.jpg'
import HowWeWork from './HowWeWork'
import Work from './Work'
// https://yosefarafa103.github.io/portfolio2/
// claudio-schwarz-1UReRFn0xNk-unsplash.jpg
const Landing = () => {
    const animationVariant = {
        initial: { x: '100%' },
        play: { x: "-110%" }
    }
    return (
        <>
            <TemplateOne text={`We Are`}>
                <section className="flex justify-between max-[768px]:items-center max-[768px]:flex-col">
                    <h3 className="text-[7vw] font-[300] text-[#001524] w-full tracking-[2px]">Creative Eliens</h3>
                    <p className="min-[768px]:max-w-[20vw] capitalize text-[#444] ">Creative Elines Is a multidisciplinary creative studio at the intersction of art design and technology</p>
                </section>
            </TemplateOne>
            <TemplateOne text={`WE do`}>
                <motion.section
                >
                    <motion.section
                        className='flex items-center gap-[6vw]'
                        variants={animationVariant}
                        initial="initial"
                        animate="play"
                        exit="initial"
                        transition={{ duration: 50, ease: 'easeOut', repeat: Infinity, repeatType: 'loop', type: 'tween' }}
                    >
                        {['Design', 'Branding', "Deveopment",].map(el => (
                            <div className='relative ' key={el}>
                                <Heading text={`${el}`} />
                                <span
                                    className='absolute right-[-3.4vw] top-1/2 -translate-y-1/2 block bg-green-500 w-[15px] h-[15px] max-[576px]:w-[7px] max-[576px]:h-[7px] bg-green rounded-[50%]'>
                                </span>
                            </div>
                        ))
                        }
                    </motion.section>
                </motion.section>
            </TemplateOne >
            <TemplateOne text={`our projects`}>
                <section className="flex justify-between max-[768px]:items-center max-[768px]:flex-col">
                    <h3 className="text-[7vw] font-[300] text-[#001524] w-full tracking-[2px]">Case studies</h3>
                    <p className="min-[768px]:max-w-[20vw] capitalize text-[#444] ">
                        volupat consectetur consquat  vivamus et facilisis urna. porttitor id sit enim parllel distribution tempus phasellus amet at accumasan
                    </p>
                </section>
            </TemplateOne>
            <Project img={img1} title={`Branding`} title2={`Corridor`} />
            <Project dir='ltr' img={img2} title={`Animation`} title2={`Valkyrine`} />
            <Project img={img3} title={`App Design`} title2={`Place`} />
            <Project img={img4} dir='ltr' title={`Web Design`} title2={`Swinger`} />
            <HowWeWork />
            <section className='px-[4vw]'>
                <Work text={`identy the problem`} img={`https://images.unsplash.com/photo-1700587085866-da054fa04c1f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`} />
                <Work text={`define the process`} img={`https://images.unsplash.com/photo-1709706696754-4553fc5ec7e5?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`} id='02' />
                <Work text={`Collaborde with team`} img={`https://images.unsplash.com/photo-1685712058548-e7666d0b24cb?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`} id='03' />
                <Work text={`competence of the project`} img={`https://images.unsplash.com/photo-1644318295821-12c4ddf2a36e?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`} id='04' />
            </section>
        </>
    )
}
export default Landing