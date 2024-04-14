import TemplateOne from "./TemplateOne"

const HowWeWork = () => {
    return (
        <>
            <TemplateOne border text={`Our Process`}>
                <section className="flex justify-between items-center max-[768px]:items-center max-[768px]:flex-col">
                    <h3 className="text-[7vw] font-[300] text-[#001524] w-full tracking-[2px]">How we works</h3>
                    <p className="min-[768px]:max-w-[30vw] capitalize text-[#444] ">
                        volupat consectetur consquat  vivamus et facilisis urna. porttitor id sit enim parllel distribution tempus phasellus amet at accumasan
                    </p>
                </section>
            </TemplateOne>
        </>
    )
}

export default HowWeWork