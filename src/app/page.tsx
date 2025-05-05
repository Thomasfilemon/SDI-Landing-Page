import About from "@/components/sections/About";
import ClientLogos from "@/components/sections/ClientLogos";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ClientLogos />
        <Services />
        <Portfolio />
        <About />
      </main>
      <Footer />
    </div>
  );
}
