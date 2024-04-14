const Button = ({ link = '' }) => {
    return (
        <a href={link} target="_blank" className='transition-all duration-300 hover:bg-[#dfdbd3] border-sold border-[2px] px-[3vw] py-[0.8vw] border-black w-fit rounded-[50px]'>View Project</a>
    )
}

export default Button