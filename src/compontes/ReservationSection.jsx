"use client";

import React, { useState } from "react";
import Image from "next/image";
import Container from "./Container";

export default function ReservationSection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <Container>
      <section
        className="grid md:grid-cols-2 gap-6 items-center py-12"
        aria-labelledby="reservation-heading"
      >
        {/* Left Side - Image/Video */}
        <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden">
          <Image
            src="/image/book.jpg"
            alt="Restaurant booking background"
            fill
            priority
            className="object-cover"
          />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => setShowVideo(true)}
              aria-label="Play reservation video"
              className="w-16 h-16 rounded-full bg-[#FEA116] flex items-center justify-center shadow-lg hover:bg-[#feb445] transition cursor-pointer text-white text-2xl"
            >
              ▶
            </button>
          </div>
        </div>

        {/* Right Side - Booking Form */}
        <div className="bg-[#0F172B] text-white rounded-2xl p-6 md:p-8 shadow-lg">
          <h3 className="text-orange-400 font-semibold uppercase mb-2">
            Reservation
          </h3>
          <h2
            id="reservation-heading"
            className="text-2xl md:text-3xl font-bold mb-6"
          >
            Book A Table Online
          </h2>

          <form
            action="#"
            method="POST"
            className="space-y-4"
            aria-label="Reservation Form"
          >
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label htmlFor="name" className="sr-only">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-md bg-white text-black cursor-pointer"
                required
              />

              <label htmlFor="email" className="sr-only">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-md bg-white text-black cursor-pointer"
                required
              />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label htmlFor="datetime" className="sr-only">
                Date and Time
              </label>
              <input
                id="datetime"
                type="datetime-local"
                name="datetime"
                className="w-full px-4 py-3 rounded-md bg-white text-black cursor-pointer"
                required
              />

              <label htmlFor="people" className="sr-only">
                Number of People
              </label>
              <select
                id="people"
                name="people"
                className="w-full px-4 py-3 rounded-md bg-white text-black cursor-pointer"
                required
              >
                <option value="">Select People</option>
                <option value="1">People 1</option>
                <option value="2">People 2</option>
                <option value="3">People 3</option>
                <option value="4">People 4</option>
              </select>
            </div>

            {/* Special Request */}
            <label htmlFor="request" className="sr-only">
              Special Request
            </label>
            <textarea
              id="request"
              name="request"
              placeholder="Special Request"
              rows="3"
              className="w-full px-4 py-3 rounded-md bg-white text-black cursor-pointer"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#FEA116] hover:bg-[#feb445] py-3 rounded-md font-semibold text-lg transition cursor-pointer"
            >
              BOOK NOW
            </button>
          </form>
        </div>
      </section>

      {/* Video Popup */}
      {showVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          role="dialog"
          aria-modal="true"
          aria-label="Reservation Video Popup"
        >
          <div className="relative w-[90%] md:w-[60%] lg:w-[50%] aspect-video bg-black rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/3U14QYMV-7M?autoplay=1"
              title="Reservation Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setShowVideo(false)}
              aria-label="Close video"
              className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-md cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </Container>
  );
}

