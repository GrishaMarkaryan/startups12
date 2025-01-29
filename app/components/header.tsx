import Link from "next/link"

export default function Header() {
    return (
        <div className="flex justify-between items-center mx-[50px] my-[15px]">
            <div className="text-2xl font-bold cursor-pointer">
                <Link href={'/'}> AI-hunters </Link>
            </div>
            <div className="flex items-center gap-10 font-semibold">
                <Link href={'/current-activities'}> <div> Current activities </div></Link>
                <Link href={'/in12months'}> <div> 12 months challenge </div></Link>
            </div>
            <div className="flex items-center gap-5 font-medium">
                <div className="font-semibold cursor-pointer"> About us </div>
                <div className="bg-black hover:bg-neutral-700 transition-all ease-linear text-white py-2 px-3 rounded-md cursor-pointer"> Contact us </div>
            </div>
        </div>
    )
}