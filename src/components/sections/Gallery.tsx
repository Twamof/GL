import { motion } from "framer-motion";

export default function Gallery() {
    return (
        <section id="gallery" className="grid grid-cols-1 md:grid-cols-2 min-h-[60vh]">
            {/* Social Gallery */}
            <div className="relative group overflow-hidden h-[50vh] md:h-auto">
                <img
                    src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2000&auto=format&fit=crop"
                    alt="Social Gallery"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h3 className="text-3xl md:text-4xl font-serif mb-2">Social Gallery</h3>
                    <p className="text-sm tracking-widest uppercase opacity-80 mb-6">Hair & Makeup for Guests</p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="border border-white px-8 py-2 uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                    >
                        View
                    </motion.button>
                </div>
            </div>

            {/* Bridal Gallery */}
            <div className="relative group overflow-hidden h-[50vh] md:h-auto">
                <img
                    src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=2000&auto=format&fit=crop"
                    alt="Bridal Gallery"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h3 className="text-3xl md:text-4xl font-serif mb-2">Bridal Gallery</h3>
                    <p className="text-sm tracking-widest uppercase opacity-80 mb-6">Hair & Makeup for Brides</p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="border border-white px-8 py-2 uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                    >
                        View
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
