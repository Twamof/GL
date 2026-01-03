import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Lauren K.",
        role: "Bride",
        text: "Glim beauty is truly the best. I highly recommend them for any special event. The team was so professional and made me feel like a queen.",
        stars: 5,
    },
    {
        name: "Emily R.",
        role: "Bride",
        text: "The best makeup artist I have ever worked with. She listened to exactly what I wanted and executed it perfectly.",
        stars: 5,
    },
    {
        name: "Sophia L.",
        role: "Model",
        text: "Absolutely stunning work. The attention to detail is unmatched. I felt so beautiful and confident.",
        stars: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 text-[10rem] md:text-[20rem] font-serif text-background select-none pointer-events-none opacity-50 translate-y-[-20%]">
                &rdquo;
            </div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <h2 className="text-3xl md:text-4xl font-serif mb-16">Kind Words</h2>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    loop
                    className="pb-12"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center">
                                <div className="flex space-x-1 mb-6 text-accent">
                                    {[...Array(testimonial.stars)].map((_, i) => (
                                        <Star key={i} size={16} fill="currentColor" />
                                    ))}
                                </div>
                                <p className="text-xl md:text-2xl font-serif italic mb-8 leading-relaxed max-w-2xl">
                                    "{testimonial.text}"
                                </p>
                                <div className="text-sm uppercase tracking-widest">
                                    <span className="font-semibold block mb-1">{testimonial.name}</span>
                                    <span className="text-secondary text-xs">{testimonial.role}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
