'use client'
import Link from "next/link"
import { Beats } from "../shared/Header"
import { useRouter } from "next/navigation"
import useSound from "use-sound"


const HomeNav = () => {
    const router = useRouter()
    // const [play, { stop }] = useSound("/rapbeat.mp3", { volume: 0.3, loop: true, });

    const handleClick = () => {
        // stop()
        router.push('/signin')
    }
    return (
        <nav className="w-full h-[56px] flex justify-between items-center mt-4 md:px-16 px-4">
            <Link href={`/`} className="flex gap-1 items-center">
                <Beats />
                <span className="text-[#BEB6F6] text-2xl font-Reenie">Rap mattaz</span>
            </Link>

            <button
                onClick={handleClick}
                type="button"
                className={`py-1 border font-Bebas rounded-md text-sm md:text-base uppercase text-gray-50 bg-gradient-to-t from-[#503BE8] via-[#6957EB] to-[#715FEC] border-[#503BE8] px-6`}>
                Sign in
            </button>
        </nav>
    )
}

export default HomeNav