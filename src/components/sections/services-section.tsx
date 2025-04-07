"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedServiceCard from "@/components/ui/animated-service-card";
import MotionSection from "@/components/animations/motion-section";

type ServiceCardProps = {
  title: string;
  description: string;
  imageSrc: string;
};

function ServiceCard({ title, description, imageSrc }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48 sm:h-56">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-navy mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const services = [
    {
      title: "Vinyl Flooring Installation",
      description: "Durable and stylish vinyl flooring expertly installed to enhance your space.",
      imageSrc: "https://framerusercontent.com/images/QZ9WLsTKrrojGu6oh4GoJyr80.jpeg",
    },
    {
      title: "Washing Machine Installation & Maintenance",
      description: "Professional setup and care to keep your washing machine in great condition.",
      imageSrc: "https://ext.same-assets.com/1288700763/2693529921.jpeg",
    },
    {
      title: "Turbo Dryer Services",
      description: "Efficient installation and repair to ensure your dryer works flawlessly.",
      imageSrc: "https://ext.same-assets.com/1288700763/1387232857.jpeg",
    },
    {
      title: "Domestic Plumbing",
      description: "From leaks to new installations, we handle all your plumbing needs with care.",
      imageSrc: "https://ext.same-assets.com/1288700763/1127406066.jpeg",
    },
    {
      title: "Dishwasher Installation & Maintenance",
      description: "Expert installation and regular maintenance to keep your dishwasher running efficiently and trouble-free.",
      imageSrc: "https://ext.same-assets.com/1288700763/1781396770.jpeg",
    },
    {
      title: "Electrical Installation & Refurbishing",
      description: "Safe and reliable electrical services, including wiring, lighting, and system upgrades.",
      imageSrc: "https://ext.same-assets.com/1288700763/1307441648.jpeg",
    },
    {
      title: "Air Conditioning Installation & Maintenance",
      description: "Keep cool with expert AC installation, regular maintenance, and repairs.",
      imageSrc: "https://ext.same-assets.com/1288700763/2634160139.jpeg",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <MotionSection className="text-center mb-12" delay={0.1}>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-navy mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Our team of highly skilled professionals is committed to ensuring that your appliances and systems are running smoothly and efficiently.
          </motion.p>
        </MotionSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Decorative Background Elements */}
      <motion.div
        className="absolute top-40 right-0 w-64 h-64 bg-primary rounded-full opacity-5 -mr-32"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-20 left-0 w-72 h-72 bg-primary rounded-full opacity-5 -ml-40"
        animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
      />
    </section>
  );
}
