import Image from "next/image"
import iphone from '../_images/iphone.png'


export default function Main() {
    return (
        <div className="flex flex-col gap-20 justify-center items-center bg-black text-white">
            <div className="flex">
                <div className="flex flex-col gap-20 justify-center">
                    <div className="flex flex-col items-end">
                        <div className="text-[70px] font-semibold text-green-600"> AI HUNTERS </div>
                        <div className="text-[25px] font-semibold">
                            <div> AI & Innovative startups </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-end font-bold ">
                        <div className="text-[35px]"> 8 мес 14 дней </div>
                        <div className="text-[25px]">До запуска  стартапа </div>
                    </div>
                </div>
                <div className="w-[500px]">
                    <Image src={iphone} alt="iphone" />
                </div>
            </div>

            <div className="flex flex-col justify-center items-center ">
                <div className="flex gap-8 text-[15px] font-semibold">
                    <div> TELEGRAM </div>
                    <div> INSTAGRAM </div>
                </div>
            </div>
            <div className="h-[200px]"></div>
        </div >
    )
}