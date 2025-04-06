"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckIcon } from "lucide-react";
import AnimatedButton from "@/components/ui/animated-button";
import MotionSection from "@/components/animations/motion-section";
import FloatingElement from "@/components/animations/floating-element";
import WorkingHours from "@/components/ui/working-hours";

export default function WhyChooseSection() {
  const features = [
    "Certified Expert Technicians",
    "Affordable Pricing",
    "Customer Satisfaction"
  ];

  return (
    <section id="why-dtech" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <MotionSection className="flex flex-col" delay={0.2}>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-navy mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Why Choose Dteck Maintenance?
            </motion.h2>
            <motion.p
              className="text-gray-600 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Your one-stop solution for hassle-free home services. Trust our experts to keep your home running smoothly.
            </motion.p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                >
                  <motion.div
                    className="mr-3 mt-1"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <CheckIcon className="h-5 w-5 text-primary" />
                  </motion.div>
                  <p className="text-gray-700">{feature}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <AnimatedButton href="mailto:info.dteckmaintenance@gmail.com">
                Get in Touch
              </AnimatedButton>
              <AnimatedButton
                href="tel:+447341617233"
                variant="outline"
              >
                Call Us
              </AnimatedButton>
            </motion.div>

            {/* Working Hours Card - Only visible on mobile and tablets */}
            <motion.div
              className="block lg:hidden mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <WorkingHours className="shadow-md" />
            </motion.div>
          </MotionSection>

          <div className="flex flex-col space-y-8">
            <MotionSection delay={0.4} direction="left" className="rounded-lg overflow-hidden">
              <FloatingElement amplitude={10} duration={6}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="https://ext.same-assets.com/1288700763/1307441648.jpeg"
                    alt="DTECK professional technician"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </motion.div>
              </FloatingElement>
            </MotionSection>

            {/* Working Hours Card - Visible only on desktop */}
            <MotionSection delay={0.6} direction="left" className="hidden lg:block">
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <WorkingHours className="shadow-lg" />
              </motion.div>
            </MotionSection>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <motion.div
        className="absolute top-1/2 left-0 w-32 h-32 bg-primary opacity-5 rounded-full -ml-16"
        animate={{ scale: [1, 1.3, 1], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-24 h-24 bg-primary opacity-5 rounded-full"
        animate={{ scale: [1, 1.5, 1], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
      />
    </section>
  );
}
