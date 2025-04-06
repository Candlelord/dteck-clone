"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import AnimatedButton from "@/components/ui/animated-button";
import FloatingElement from "@/components/animations/floating-element";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="max-w-md">
          <FloatingElement amplitude={15} duration={6}>
            <motion.div
              initial={{ rotate: -10, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Image
                src="https://ext.same-assets.com/1288700763/3346768339.svg"
                alt="Page not found illustration"
                width={300}
                height={300}
                className="mx-auto mb-8"
              />
            </motion.div>
          </FloatingElement>

          <motion.h1
            className="text-3xl font-bold text-navy mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Oopss! Page not found
          </motion.h1>

          <motion.p
            className="text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            This page is unknown or does not exist. Sorry about that but the page you are looking for is available
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <AnimatedButton href="/">
              Go to Home
            </AnimatedButton>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-1/3 left-10 w-24 h-24 bg-primary rounded-full opacity-5 hidden lg:block"
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-32 h-32 bg-primary rounded-full opacity-5 hidden lg:block"
        animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.08, 0.05] }}
        transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
      />

      <Footer />
    </main>
  );
}
