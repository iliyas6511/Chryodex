import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import Logo from "../assets/Images/Chryodex.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showTopbar, setShowTopbar] = useState(true);

    const navLinks = [
        { name: "Home", to: "/" },
        { name: "Company", to: "#" },
        { name: "Products", to: "/products" },
        { name: "Variety", to: "/multiproducts" },
        { name: "Product Details", to: "/productdetails" },
        { name: "Contact Us", to: "#" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShowTopbar(false);
            } else {
                setShowTopbar(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="w-full fixed top-0 left-0 z-50">
            {/* Topbar */}
            <div className={`bg-white/90 backdrop-blur-md  border-primary shadow-sm transition-all duration-500 overflow-hidden ${showTopbar ? "max-h-16 opacity-100 border-b-[2px]" : "max-h-0 opacity-0"
                }`}>
                <div className="max-w-7xl mx-auto px-6 py-2 text-base font-medium flex justify-between items-center text-gray-700">
                    <span>
                        Customer Care :{" "}
                        <a
                            href="tel:8070408010"
                            className="text-secondary font-semibold hover:underline"
                        >
                            8070408010
                        </a>
                    </span>
                    <span>
                        Email :{" "}
                        <a
                            href="mailto:info@magicrete.in"
                            className="text-secondary font-semibold hover:underline"
                        >
                            info@magicrete.in
                        </a>
                    </span>
                </div>
            </div>

            {/* Navbar */}
            <div className="bg-white/80 backdrop-blur-lg">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img src={Logo} alt="Magicrete" className="h-12" />
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link to={link.to}>
                                <p
                                    key={link.name}
                                    href={link.href}
                                    className="relative text-gray-700 hover:text-secondary font-medium transition"
                                >
                                    {link.name}
                                    {/* underline animation */}
                                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
                                </p>
                            </Link>
                        ))}
                        <button className="relative overflow-hidden font-semibold px-5 py-2 rounded-full shadow-md border-2 border-secondary group">
                            {/* Text (always above background) */}
                            <span className="relative z-10 text-white group-hover:text-secondary transition-colors duration-500">
                                Find A Dealer
                            </span>

                            {/* Background layers */}
                            <span className="absolute inset-0 bg-secondary z-0 transition-transform duration-500 group-hover:translate-x-full"></span>
                            <span className="absolute inset-0 bg-white z-0 transition-transform duration-500 -translate-x-full group-hover:translate-x-0"></span>
                        </button>


                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-3xl text-gray-700"
                        >
                            {isOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-white/95 backdrop-blur-lg shadow-md transform transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                    }`}
            >
                <div className="flex flex-col items-start space-y-4 px-6 py-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-700 hover:text-secondary font-medium transition"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="bg-secondary hover:bg-tertiary text-black font-semibold px-5 py-2 rounded-full shadow-md transition-all duration-300">
                        Find A Dealer
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
