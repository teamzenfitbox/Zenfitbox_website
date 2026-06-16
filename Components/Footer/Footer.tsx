"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative  bg-black">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col">
            <Image
              src="/logo.webp"
              alt=""
              width={100}
              height={100}
              className="w-50 h-50 object-contain"
            />
            <p className="text-sm leading-relaxed text-zinc-400">
              Helping you build strength, confidence, discipline and a healthier
              lifestyle through fitness and boxing coaching.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>

            <ul className="mt-4 space-y-3 text-zinc-400">
              <li>
                <Link href="/#home">Home</Link>
              </li>

              <li>
                <Link href="/#about">About</Link>
              </li>

              <li>
                <Link href="/#services">Services</Link>
              </li>
              <li>
                <Link href="/#faq">FAQ</Link>
              </li>
              <li>
                <Link href="/#contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-white">Programs</h3>

            <ul className="mt-4 space-y-3 text-zinc-400">
              <li>Personal Training</li>
              <li>Boxing Coaching</li>
              <li>Weight Loss</li>
              <li>Muscle Building</li>
              <li>Online Coaching</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-white">Contact</h3>

            <div className="mt-4 space-y-4 text-zinc-400">
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+91 6381992622</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>teamzenfitbox@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>R.S.Mangalam, Tamil Nadu</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Zen Fit Box. All Rights Reserved.
          </p>
          <a
            href="https://spicycodez.netlify.app/"
            target="_blank"
            className="text-sm text-zinc-500 hover:text-red-500"
          >
            Developed By Spicy CodeZ
          </a>
        </div>
      </div>
    </footer>
  );
}
