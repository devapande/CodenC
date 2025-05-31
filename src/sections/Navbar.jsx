import { useState } from 'react'
import { Headphones, Menu, X } from 'lucide-react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-[#f6f6fc] py-4 px-4 sm:px-6 font-[navbar] flex items-center justify-between relative z-50 pt-8">
            {/* Logo */}
            <div className="flex items-center space-x-2 pl-2 sm:pl-10">
                <div className="w-8 h-8 flex items-center justify-center">
                    <img src="/mini-logo.png" alt="mini-logo"/>
                </div>
                <span className="font-bold text-lg text-black">CodenC</span>
            </div>

            {/* Menu Tengah */}
            <ul className="hidden md:flex space-x-6 text-gray-500 font-medium text-sm">
                <li className="hover:text-black cursor-pointer">About</li>
                <li className="hover:text-black cursor-pointer">Work</li>
                <li className="hover:text-black cursor-pointer">Services</li>
                <li className="hover:text-black cursor-pointer">Jobs</li>
            </ul>

            {/* Tombol Contact + Hamburger */}
            <div className="flex items-center space-x-4 pr-2 sm:pr-10">
                <button className="bg-gray-100 hover:bg-gray-200 text-black font-semibold px-4 py-2 rounded-xl flex items-center space-x-2 text-sm">
                    <img src="/headset.png" alt="headset" className="w-4 h-4"/>
                    <span>Contact</span>
                </button>

                {/* Toggle Icon (Mobile) */}
                <button
                    className="md:hidden transition duration-300 ease-in-out"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? (
                        <X className="w-6 h-6 text-black transition-transform duration-300 rotate-90" />
                    ) : (
                        <Menu className="w-6 h-6 text-black transition-transform duration-300 scale-100" />
                    )}
                </button>
            </div>

            {/* Mobile Dropdown Menu with animation */}
            <div
                className={`absolute top-full left-0 w-full bg-[#f6f6fc] border-t border-gray-200 shadow-md md:hidden transition-all duration-300 ease-in-out origin-top transform ${
                    isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
                }`}
            >
                <ul className="flex flex-col items-start px-6 py-4 space-y-4 text-gray-500 font-medium text-sm">
                    <li className="hover:text-black cursor-pointer">About</li>
                    <li className="hover:text-black cursor-pointer">Work</li>
                    <li className="hover:text-black cursor-pointer">Services</li>
                    <li className="hover:text-black cursor-pointer">Jobs</li>
                </ul>
            </div>
        </nav>
    )
}
