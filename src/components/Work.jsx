const Work = ({ id = '01', img, text }) => {
    return (
        <>
            <div className="flex max-[576px]:flex-col-reverse gap-[4vw] items-center">
                <div className="flex flex-col flex-1">
                    <h4 className="text-[5vw] leading-[1.3] capitalize tracking-[2px] font-semibold">{text}</h4>
                    <p className="text-[20px] text-[#444]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex et blanditiis rerum inventore odio tenetur consequatur cum minima facere quis expedita ab, molestias aut illum vel necessitatibus perspiciatis explicabo! Quibusdam!</p>
                </div>
                <div className="flex flex-col items-end justify-center flex-1 py-[15px]">
                    <div className="w-[16vw] max-[576px]:!w-[35vw] max-[576px]:!h-[12.5vh] text-[4vw] tracking-[4px] flex items-center justify-center text-[#333] border-solid border-[2px] border-b-transparent border-[#444] h-[18vh]" >
                        {id}
                    </div>
                    <div className="flex w-[30vw] max-[576px]:h-[40vh] max-[576px]:!w-[82vw] border-solid border-[2px] border-[#444] h-[35vh]">
                        <img src={img} className="p-[5vw] " loading="lazy" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work