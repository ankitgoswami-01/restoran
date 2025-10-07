"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Container from "@/compontes/Container";

export default function PageHeader({ title }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative w-full ">
      {/* Navbar */}
        <div
        className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
          scrolled ? "bg-[#0F172B] shadow-md" : "bg-[#0F172B]"
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

      {/* Page Header Section */}
      <div
  className="relative bg-cover bg-center h-[200px] md:h-[300px] flex items-center justify-center mt-[70px]"
  style={{
    backgroundImage: `linear-gradient(rgba(15, 23, 43, 0.9), rgba(15, 23, 43, 0.9)), url('/image/bg-hero.jpg')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }}
>
  {/* Content */}
  <div className="relative text-center text-white z-10 px-4">
    <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
    <p className="mt-2 text-sm md:text-base">
      <span className="text-yellow-500">HOME</span> / PAGES /{" "}
      {title.toUpperCase()}
    </p>
  </div>
</div>

    </header>
  );
}
