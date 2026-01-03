import { motion } from "framer-motion";
import bridalHair from "../../assets/services/image_1.png";
import bridalMakeup from "../../assets/services/image_2.png";
import bridalCircle from "../../assets/services/image_3.png";

const services = [
    {
        title: "Your Big Day",
        description: "Timeless hairstyling & makeup that enhances your natural beauty.",
        image: bridalHair,
        cta: "Learn More",
    },
    {
        title: "Your Bridal Vision",
        description: "A personalized session to craft your look with care for every detail.",
        image: bridalMakeup,
        cta: "Book Call",
    },
    {
        title: "Your Inner Circle",
        description: "Elegant styling for your bridesmaids, family, or special guests.",
        image: bridalCircle,
        cta: "Book Now",
    },
];

export default function ServiceShowcase() {
    return (
        <section id="services" className="py-32 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">What we offer</h2>
                    <p className="text-secondary text-sm md:text-base tracking-[0.3em] uppercase max-w-2xl mx-auto font-light">
                        A curated beauty experience for every milestone
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="group relative h-[600px] overflow-hidden cursor-pointer"
                        >
                            {/* Background Image with Zoom Effect */}
                            <motion.img
                                src={service.image}
                                alt={service.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 text-white">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                                >
                                    <h3 className="text-3xl md:text-4xl font-serif mb-4 leading-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-white/80 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-sm">
                                        {service.description}
                                    </p>
                                    <div className="overflow-hidden">
                                        <motion.button
                                            whileHover={{ x: 10 }}
                                            className="flex items-center gap-2 text-xs md:text-sm uppercase tracking-widest font-medium group-hover:text-accent transition-colors"
                                        >
                                            {service.cta}
                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="currentColor" />
                                            </svg>
                                        </motion.button>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
