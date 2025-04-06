"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import MotionSection from "@/components/animations/motion-section";
import AnimatedButton from "@/components/ui/animated-button";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just open the default email client
    const mailtoLink = `mailto:info.dteckmaintenance@gmail.com?subject=Contact Form Submission&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <MotionSection className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-navy mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Get in Touch
            </motion.h2>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Have a question or need our services? We're here to help. Fill out the form below or contact us directly.
            </motion.p>
          </MotionSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <MotionSection delay={0.3}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <AnimatedButton type="submit" className="w-full">
                  Send Message
                </AnimatedButton>
              </form>
            </MotionSection>

            {/* Contact Information */}
            <MotionSection delay={0.5} direction="left">
              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-navy mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-primary mt-1 mr-3" />
                      <div>
                        <h4 className="font-medium text-gray-900">Phone</h4>
                        <a href="tel:+447341617233" className="text-gray-600 hover:text-primary">
                          +44 (0) 734 161 7233
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-primary mt-1 mr-3" />
                      <div>
                        <h4 className="font-medium text-gray-900">Email</h4>
                        <a href="mailto:info.dteckmaintenance@gmail.com" className="text-gray-600 hover:text-primary">
                          info.dteckmaintenance@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-primary mt-1 mr-3" />
                      <div>
                        <h4 className="font-medium text-gray-900">Service Area</h4>
                        <p className="text-gray-600">
                          Greater London area and surrounding regions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-navy mb-4">Business Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-medium">8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-medium">8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-medium">8:00 AM - 8:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </MotionSection>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <motion.div
        className="absolute top-10 right-0 w-40 h-40 bg-primary rounded-full opacity-5 hidden lg:block"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-10 left-0 w-48 h-48 bg-primary rounded-full opacity-5 hidden lg:block"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
      />
    </section>
  );
} 