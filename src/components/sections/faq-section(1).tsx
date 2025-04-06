"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MotionSection from "@/components/animations/motion-section";

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQSection() {
  const faqs: FAQItem[] = [
    {
      question: "How often should I service my air conditioner?",
      answer: "It's recommended to have your air conditioner serviced at least once a year to ensure optimal performance and longevity.",
    },
    {
      question: "Can you install smart doorbells?",
      answer: "Yes, we provide installation services for a variety of smart home devices, including smart doorbells. Our technicians are trained to properly install and set up these devices to ensure they work correctly with your home network.",
    },
    {
      question: "Do you offer emergency services?",
      answer: "Yes, we offer emergency services for critical repairs such as plumbing leaks, electrical issues, and heating/cooling failures. Please call our emergency line, and we'll dispatch a technician as quickly as possible.",
    },
    {
      question: "What areas do you service?",
      answer: "We currently provide our services throughout the greater London area and surrounding regions. Please contact us to confirm if we service your specific location.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="faqs" className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <MotionSection className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-navy mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Frequently Asked Questions
            </motion.h2>
          </MotionSection>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  variants={itemVariants}
                  custom={index}
                >
                  <AccordionItem value={faq.question} className="border-b border-gray-200">
                    <motion.div
                      whileHover={{ backgroundColor: "rgba(28, 100, 242, 0.05)" }}
                      transition={{ duration: 0.2 }}
                    >
                      <AccordionTrigger className="text-left font-medium text-navy py-4">
                        {faq.question}
                      </AccordionTrigger>
                    </motion.div>
                    <AccordionContent className="text-gray-600 pb-4">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        {faq.answer}
                      </motion.div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <motion.div
        className="absolute top-10 right-0 w-40 h-40 bg-primary rounded-full opacity-5 -mr-20 hidden lg:block"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-10 left-0 w-48 h-48 bg-primary rounded-full opacity-5 -ml-24 hidden lg:block"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
      />
    </section>
  );
}
