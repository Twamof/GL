import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import ServiceShowcase from "./components/sections/ServiceShowcase";
import Gallery from "./components/sections/Gallery";
import Stats from "./components/sections/Stats";
import Testimonials from "./components/sections/Testimonials";
import Instagram from "./components/sections/Instagram";

function App() {
  return (
    <main className="min-h-screen bg-background text-primary overflow-x-hidden">
      <Navbar />
      <Hero />
      <ServiceShowcase />
      <Gallery />
      <Stats />
      <Testimonials />
      <Instagram />
      <Footer />
    </main>
  );
}

export default App;
