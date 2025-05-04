import Image from "next/image";

const projects = [
  { name: "Fintech App", image: "/images/fintech.png" },
  { name: "E-Commerce Platform", image: "/images/ecommerce.png" },
  { name: "Health Tracker", image: "/images/health.png" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Our Portfolio</h2>
        <p className="text-gray-600">Take a look at our recent work</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {projects.map((project) => (
          <div key={project.name} className="bg-gray-100 p-4 rounded-xl shadow">
            <Image
              src={project.image}
              alt={project.name}
              width={400}
              height={240}
              className="rounded mb-4"
            />
            <h3 className="text-lg font-semibold">{project.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
