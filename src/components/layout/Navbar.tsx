import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-12 py-4",
                isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="text-2xl md:text-3xl font-serif font-medium tracking-wide">
                    Gl<span className="text-accent">.</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-widest uppercase">
                    {["Services", "Gallery", "About", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="hover:text-accent transition-colors duration-300 relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                    <button className="border border-primary px-6 py-2 hover:bg-primary hover:text-white transition-all duration-300">
                        Book Now
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-white shadow-lg p-6 md:hidden flex flex-col space-y-4 items-center"
                    >
                        {["Services", "Gallery", "About", "Contact"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-lg font-serif"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                        <button className="w-full border border-primary px-6 py-3 mt-4 hover:bg-primary hover:text-white transition-all duration-300">
                            Book Now
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
