import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0f172b] to-[#1a2235] text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Company */}
        <nav aria-label="Company">
          <h3 className="text-xl font-semibold text-yellow-500 mb-4">Company</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="">Reservation</Link></li>
            <li><Link href="">Privacy Policy</Link></li>
            <li><Link href="">Terms & Condition</Link></li>
          </ul>
        </nav>

        {/* Contact */}
        <address className="not-italic">
          <h3 className="text-xl font-semibold text-yellow-500 mb-4">Contact</h3>
          <p className="text-gray-300">123 Street, New York, USA</p>
          <p className="text-gray-300">📞 +012 345 67890</p>
          <p className="text-gray-300">✉ info@example.com</p>
          <ul className="flex space-x-3 mt-4">
            <li>
              <Link href="#" aria-label="Facebook" className="w-9 h-9 flex items-center justify-center bg-yellow-500 rounded-full hover:bg-yellow-600 transition">
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link href="#" aria-label="Twitter" className="w-9 h-9 flex items-center justify-center bg-yellow-500 rounded-full hover:bg-yellow-600 transition">
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link href="#" aria-label="Instagram" className="w-9 h-9 flex items-center justify-center bg-yellow-500 rounded-full hover:bg-yellow-600 transition">
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link href="#" aria-label="LinkedIn" className="w-9 h-9 flex items-center justify-center bg-yellow-500 rounded-full hover:bg-yellow-600 transition">
                <FaLinkedinIn />
              </Link>
            </li>
          </ul>
        </address>

        {/* Opening Hours */}
        <section>
          <h3 className="text-xl font-semibold text-yellow-500 mb-4">Opening</h3>
          <ul className="text-gray-300 space-y-2">
            <li><time dateTime="Mo-Sa">Monday - Saturday</time>: 09AM - 09PM</li>
            <li><time dateTime="Su">Sunday</time>: 10AM - 08PM</li>
          </ul>
        </section>

        {/* Newsletter */}
        <section>
          <h3 className="text-xl font-semibold text-yellow-500 mb-4">Newsletter</h3>
          <p className="text-gray-300 mb-3">
            Subscribe to get latest news and offers.
          </p>
          <form className="flex" aria-label="Newsletter Signup">
            <input
              type="email"
              placeholder="Your email"
              aria-label="Email Address"
              className="p-3 rounded-l-md flex-1 bg-white text-black outline-none cursor-pointer "
             />
           <Link
              href="#"   style={{ paddingTop: "10px" }}
              className="bg-yellow-500 px-4 rounded-r-md hover:bg-yellow-600 transition cursor-pointer inline-block text-white"
                     >
                  Signup
            </Link>
          </form>
        </section>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-gray-400 text-sm">
        <p>
          © {new Date().getFullYear()} Your Site Name. All Rights Reserved.{" "}
          <span>
            Designed by {" Ankit Goswami "}
            <Link href="#" className="text-yellow-500 hover:underline">
              YourBrand
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
}
