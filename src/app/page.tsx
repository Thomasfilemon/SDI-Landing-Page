import Hero from "@/components/sections/Hero";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import ClientLogos from "@/components/sections/ClientLogos";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ClientLogos />
        <Services />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
