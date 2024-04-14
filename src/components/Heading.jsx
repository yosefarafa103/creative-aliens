import { motion } from 'framer-motion'
const Heading = ({ text }) => {

    return (
        <>
            <h2
                className="text-[7vw] tracking-[1.5px] font-[900] text-[#001524]"> {text} </h2>
        </>
    )
}

export default Heading