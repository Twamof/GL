import { motion } from "framer-motion";

const stats = [
    { value: "1,300+", label: "Brides Styled" },
    { value: "15+", label: "Years of Beauty Artistry" },
    { value: "100%", label: "Personalized Service" },
];

export default function Stats() {
    return (
        <section className="py-20 bg-background border-y border-gray-200">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="py-8 md:py-0 flex flex-col items-center text-center"
                        >
                            <h3 className="text-4xl font-serif text-primary mb-2">{stat.value}</h3>
                            <p className="text-secondary text-sm uppercase tracking-widest">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
