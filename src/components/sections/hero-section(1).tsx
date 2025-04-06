"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedButton from "@/components/ui/animated-button";
import MotionSection from "@/components/animations/motion-section";
import FloatingElement from "@/components/animations/floating-element";
import BackgroundParticles from "@/components/animations/background-particles";

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className="pt-32 pb-20 bg-gray-50 relative overflow-hidden"
    >
      <BackgroundParticles count={20} className="opacity-30" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <MotionSection className="flex flex-col max-w-2xl" delay={0.2}>
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-navy mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Expert Home Services
              <br />
              You Can Trust
            </motion.h1>

            <motion.p
              className="text-gray-700 mb-8 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              At Dteck Maintenance, we offer top-notch installation, maintenance, and repair services for your home or business.
              Our skilled team is here to keep your appliances and systems running smoothly.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <AnimatedButton href="mailto:info.dteckmaintenance@gmail.com">
                Get In Touch
              </AnimatedButton>
            </motion.div>
          </MotionSection>

          <FloatingElement amplitude={15} duration={5} className="relative rounded-lg overflow-hidden">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Image
                src="https://ext.same-assets.com/1288700763/1387232857.jpeg"
                alt="DTECK maintenance professional with client"
                width={600}
                height={400}
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </motion.div>
          </FloatingElement>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-primary rounded-full opacity-10 hidden lg:block"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-primary rounded-full opacity-10 hidden lg:block"
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
      />
    </section>
  );
}
