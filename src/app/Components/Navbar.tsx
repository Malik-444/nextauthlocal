import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="bg-white/30 shadow-xl p-4 container mx-auto mt-3">
            <ul className="flex justify-evenly text-2xl font-bold">
                <li><Link className="hover:bg-slate-300/70 transition-all ease-in-out delay-200" href="/">Home</Link></li>
                <li><Link className="hover:bg-slate-300/70 transition-all ease-in-out delay-200" href="/api/auth/signin">Sign In</Link></li>
                <li><Link className="hover:bg-slate-300/70 transition-all ease-in-out delay-200" href="/api/auth/signout">Sign Out</Link></li>
                <li><Link className="hover:bg-slate-300/70 transition-all ease-in-out delay-200" href="/server">Server</Link></li>
                <li><Link className="hover:bg-slate-300/70 transition-all ease-in-out delay-200" href="/client">Client</Link></li>
                <li><Link className="hover:bg-slate-300/70 transition-all ease-in-out delay-200" href="/extra">Extra</Link></li>
            </ul>
        </nav>
    )
}