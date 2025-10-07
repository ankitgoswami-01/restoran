
import React from "react";
import PageHeader from "@/compontes/PageHeader";
import Container from "@/compontes/Container";
import { Mail } from "lucide-react";

export const metadata = {
  title: "Contact SkyHub | Get in Touch for Reservations or Queries",
  description:
    "Have a question or want to book a table? Contact SkyHub for inquiries, feedback, or reservations. We’re here to make your dining experience special.",
  keywords: [
    "contact SkyHub",
    "customer support",
    "booking help",
    "technical assistance",
    "service inquiry",
  ],
};

export default function Page() {
  return (
    <>
      {/* SEO Optimized Header */}
      <PageHeader title="Contact" />

      {/* Contact Section */}
      <Container>
        <section className="py-12">
          <div className="text-center mb-10">
            <h5 className="text-yellow-600 font-semibold mb-2">Contact Us</h5>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Contact For Any Query
            </h2>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row justify-center items-center md:gap-16 gap-8 mb-10">
            {[
              { label: "Booking", email: "book@example.com" },
              { label: "General", email: "info@example.com" },
              { label: "Technical", email: "tech@example.com" },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <h4 className="font-semibold text-yellow-600 flex items-center justify-center gap-2 mb-1">
                  <Mail className="w-5 h-5 text-yellow-600" />
                  {item.label}
                </h4>
                <p className="text-gray-700">{item.email}</p>
              </div>
            ))}
          </div>

          {/* Map and Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Google Map */}
            <div className="w-full h-[300px] md:h-[400px] overflow-hidden rounded-2xl shadow-lg">
              <iframe
                title="SkyHub Location"
                src="https://www.google.com/maps?q=New+York,+USA&output=embed"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                className="rounded-2xl border-0"
              ></iframe>
            </div>

            {/* Contact Form */}
            <form className="bg-white shadow-lg rounded-2xl p-6 md:p-8 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                required
              />
              <textarea
                placeholder="Message"
                rows="5"
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-yellow-500 text-white py-3 px-6 rounded-md font-semibold hover:bg-yellow-600 transition cursor-pointer w-full"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </section>
      </Container>
    </>
  );
}
