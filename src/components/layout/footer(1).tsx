"use client";

import Link from "next/link";
import Image from "next/image";
import WorkingHours from "@/components/ui/working-hours";

export default function Footer() {
  return (
    <footer className="bg-footer text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center">
              <Image
                src="https://ext.same-assets.com/1288700763/1154207705.png"
                alt="DTECK Maintenance & Installation"
                width={150}
                height={60}
                className="h-auto w-auto"
              />
            </Link>
            <p className="text-gray-300 text-sm mt-2">
              Professional home maintenance and repair services you can trust.
            </p>
          </div>

          {/* Menu Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-medium text-lg">Menu</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/#hero-section" className="hover:text-primary-200 transition-colors">
                Home
              </Link>
              <Link href="/#services" className="hover:text-primary-200 transition-colors">
                Our Services
              </Link>
              <Link href="/#why-dtech" className="hover:text-primary-200 transition-colors">
                Why DTECH
              </Link>
              <Link href="/#faqs" className="hover:text-primary-200 transition-colors">
                FAQs
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-medium text-lg">Contact</h3>
            <div className="flex flex-col space-y-2">
              <a
                href="tel:+447341617233"
                className="hover:text-primary-200 transition-colors flex items-center"
              >
                <span className="mr-2">+44 (0) 734 161 7233</span>
              </a>
              <a
                href="mailto:info.dteckmaintenance@gmail.com"
                className="hover:text-primary-200 transition-colors flex items-center"
              >
                <span className="mr-2">info.dteckmaintenance@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Working Hours */}
          <div className="col-span-1 md:col-span-3 lg:col-span-1">
            <WorkingHours variant="dark" className="shadow-lg" />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm">
          <p>Copyright © {new Date().getFullYear()}. All rights reserved to DTECK Maintenance & Installation</p>
        </div>
      </div>
    </footer>
  );
}
