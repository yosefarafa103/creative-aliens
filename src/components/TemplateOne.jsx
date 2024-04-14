import React from 'react'

const TemplateOne = ({ text, children, border }) => {
    return (
        <div className={`flex pb-[15px] overflow-hidden border-b-[2px] border-b-solid ${border && '!border-b-transparent'} border-[#333] flex-col py-[30px]`}>
            <h1 className='text-[3.4vw] tracking-[1px] uppercase text-[#001524]'>{text}</h1>
            <div className='my-[1vw]'>
                {children}
            </div>
        </div>
    )
}

export default TemplateOne