import Image from "next/image";

const clients = ["google", "gojek", "ovo", "tokopedia", "traveloka"];

export default function ClientLogos() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-xl font-semibold mb-6 text-gray-700">Trusted by</h2>
      <div className="flex justify-center gap-10 flex-wrap">
        {clients.map((client) => (
          <Image
            key={client}
            src={`/logos/${client}.png`}
            alt={client}
            width={100}
            height={40}
            className="grayscale hover:grayscale-0 transition"
          />
        ))}
      </div>
    </section>
  );
}
