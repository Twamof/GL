import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const HERO_IMAGES = [
    "https://images.unsplash.com/photo-1646335938929-48e67868a928?q=80&w=2000&auto=format&fit=crop", // Makeup
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2000&auto=format&fit=crop", // Hair
    "https://images.unsplash.com/photo-1594465919760-441fe5908ab0?q=80&w=2000&auto=format&fit=crop", // Essence
];

export default function Hero() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Images */}
            <div className="absolute inset-0">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentImage}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        src={HERO_IMAGES[currentImage]}
                        alt="Luxury Bridal Beauty"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </AnimatePresence>
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center md:justify-start px-6 md:px-20 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-center md:text-left text-white max-w-2xl"
                >
                    <h2 className="text-sm md:text-base tracking-[0.4em] uppercase mb-4 text-white/90 font-light">
                        Timeless Beauty
                    </h2>
                    <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-[1.1]">
                        Natural hairstyling & makeup that reflects <span className="italic">your essence</span>.
                    </h1>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-black px-10 py-4 uppercase tracking-[0.2em] text-xs md:text-sm font-medium hover:bg-neutral-100 transition-colors duration-300"
                    >
                        Discover the Experience
                    </motion.button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 md:left-20 md:translate-x-0 text-white/50 text-[10px] tracking-[0.3em] uppercase vertical-rl"
            >
                Scroll to explore
            </motion.div>
        </section>
    );
}

