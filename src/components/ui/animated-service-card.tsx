"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type AnimatedServiceCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  index?: number;
};

export default function AnimatedServiceCard({
  title,
  description,
  imageSrc,
  index = 0,
}: AnimatedServiceCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-md"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 }
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="h-full w-full"
        >
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index < 2}
          />
        </motion.div>
      </div>
      <motion.div
        className="p-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 + (index * 0.1) }}
      >
        <h3 className="text-xl font-semibold text-navy mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </motion.div>
    </motion.div>
  );
}
