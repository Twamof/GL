import { motion } from "framer-motion";

const services = [
    {
        title: "Your Big Day",
        description: "Timeless hairstyling & makeup that enhances your natural beauty.",
        cta: "Learn More",
    },
    {
        title: "Your Bridal Vision",
        description: "A personalized session to craft your look with care for every detail.",
        cta: "Book Call",
    },
    {
        title: "Your Inner Circle",
        description: "Elegant styling for your bridesmaids, family, or special guests.",
        cta: "Book Now",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif mb-4">What we offer</h2>
                    <p className="text-secondary text-sm tracking-widest uppercase">
                        A curated beauty experience for every milestone
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-12 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-shadow duration-500 group"
                        >
                            <h3 className="text-2xl font-serif mb-6">{service.title}</h3>
                            <p className="text-secondary mb-8 leading-relaxed text-sm md:text-base">
                                {service.description}
                            </p>
                            <button className="bg-primary text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-zinc-800 transition-colors duration-300">
                                {service.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
