"use client"; 


import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Container from "./Container";

export default function HeroHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`relative w-full h-screen header-bg`}
    >
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
          scrolled ? "bg-[#0F172B] shadow-md" : "bg-transparent"
        }`}
      >
        <Container className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/image/logo.jpg" alt="Restoran Logo" width={30} height={30} />
            <span className="text-xl font-bold text-yellow-500">Restoran</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 items-center">
            <Link href="/" className="text-white hover:text-yellow-500">Home</Link>
            <Link href="/about" className="text-white hover:text-yellow-500">About</Link>
            <Link href="/service" className="text-white hover:text-yellow-500">Service</Link>
            <Link href="/menu" className="text-white hover:text-yellow-500">Menu</Link>
            <Link href="/pages" className="text-white hover:text-yellow-500">Pages</Link>
            <Link href="/contact" className="text-white hover:text-yellow-500">Contact</Link>
            <Link
              href="/book-table"
              className="bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-600 transition"
            >
              Book A Table
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </Container>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-black/90 text-white px-6 py-4 space-y-4">
            <Link href="/" className="block hover:text-yellow-500">Home</Link>
            <Link href="/about" className="block hover:text-yellow-500">About</Link>
            <Link href="/service" className="block hover:text-yellow-500">Service</Link>
            <Link href="/menu" className="block hover:text-yellow-500">Menu</Link>
            <Link href="/pages" className="block hover:text-yellow-500">Pages</Link>
            <Link href="/contact" className="block hover:text-yellow-500">Contact</Link>
            <Link
              href="/book-table"
              className="block bg-yellow-500 text-black text-center px-4 py-2 rounded-md font-semibold hover:bg-yellow-600 transition"
            >
              Book A Table
            </Link>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <div className="relative z-10 h-full flex items-center">
        <Container className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 mt-20 md:mt-0">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Enjoy Our <br /> Delicious Meal
            </h1>
            <p className="text-gray-300 max-w-lg">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
              Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
            </p>
            <Link
              href="/book-table"
              className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-600 transition"
            >
              Book A Table
            </Link>
          </div>

          {/* Right Image with Animation */}
          <div className="hidden md:block">
            <Image
              src="/image/hero.png"
              alt="Delicious Food"
              width={500}
              height={500}
              className="rounded-lg img-rotate"
            />
          </div>
        </Container>
      </div>
    </header>
  );
}
