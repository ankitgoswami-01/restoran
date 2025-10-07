import React from "react";
import Image from "next/image";
import Container from "./Container";
import { FaUtensils } from "react-icons/fa";

export default function AboutSection() {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16">
        {/* Left Side - 4 Images in Grid */}
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/image/about-1.jpg"
            alt="Restaurant Interior"
            width={300}
            height={250}
            className="rounded-lg object-cover w-full h-[200px] md:h-[220px] cursor-pointer"
            priority
          />
          <Image
            src="/image/about-2.jpg"
            alt="Restaurant Dining"
            width={300}
            height={250}
            className="rounded-lg object-cover w-full h-[200px] md:h-[220px] cursor-pointer"
          />
          <Image
            src="/image/about-3.jpg"
            alt="Serving Dish"
            width={300}
            height={250}
            className="rounded-lg object-cover w-full h-[200px] md:h-[220px] cursor-pointer"
          />
          <Image
            src="/image/about-4.jpg"
            alt="Delicious Food"
            width={300}
            height={250}
            className="rounded-lg object-cover w-full h-[200px] md:h-[220px] cursor-pointer"
          />
        </div>

        {/* Right Side - Text */}
        <div>
          <p className="text-yellow-500 font-semibold mb-2 flex items-center gap-2">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-2">
            Welcome to <FaUtensils className="text-yellow-500" /> Restoran
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
          </p>

          {/* Stats */}
          <div className="flex gap-8 mb-6">
            <div className="cursor-pointer">
              <h3 className="text-3xl font-bold text-yellow-500">15</h3>
              <p className="text-sm text-gray-600 font-bold ">Years of EXPERIENCE</p>
            </div>
            <div className="cursor-pointer">
              <h3 className="text-3xl font-bold text-yellow-500">50</h3>
              <p className="text-sm text-gray-600 font-bold ">Popular MASTER CHEFS</p>
            </div>
          </div>

          {/* Button */}
          <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-md shadow-md hover:bg-yellow-600 transition cursor-pointer">
            Read More
          </button>
        </div>
      </div>
    </Container>
  );
}
