export default function Footer() {
    return (
        <footer className="bg-primary text-white py-20 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
                <div>
                    <h2 className="text-3xl font-serif mb-6">Gl<span className="text-accent">.</span></h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        Luxury hairstyling and makeup artistry for the modern bride and high-end events.
                    </p>
                </div>

                <div>
                    <h4 className="text-sm font-semibold uppercase tracking-widest mb-6">Explore</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                        <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                        <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
                        <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-sm font-semibold uppercase tracking-widest mb-6">Contact</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li>hello@glim.mx</li>
                        <li>+52 123 456 7890</li>
                        <li>Mexico City, Mexico</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-sm font-semibold uppercase tracking-widest mb-6">Follow Us</h4>
                    <div className="flex justify-center md:justify-start space-x-6">
                        {/* Social mockups */}
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">IG</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">FB</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">PI</a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-20 pt-8 text-center text-xs text-gray-500 uppercase tracking-widest">
                &copy; {new Date().getFullYear()} Glim Beauty. All rights reserved.
            </div>
        </footer>
    );
}
