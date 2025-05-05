const services = [
  {
    title: "Mobile App Development",
    desc: "iOS, Android, Flutter, React Native",
  },
  { title: "Web Development", desc: "Next.js, Tailwind, Headless CMS" },
  { title: "UI/UX Design", desc: "Wireframes, Prototypes, User Research" },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-gray-800 text-3xl font-bold">Our Services</h2>
        <p className="text-gray-600">We turn ideas into real products</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {services.map((service) => (
          <div key={service.title} className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-700 text-xl font-semibold mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
