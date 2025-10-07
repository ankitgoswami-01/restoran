"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Container from './Container'

export default function OurClients({ testimonials }) {
  // Example testimonial data
  const defaultTestimonials = [
    {
      id: 1,
      name: 'Emily Johnson',
      profession: 'Food Blogger',
      text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.',
      image: '/image/testimonial-1.jpg',
    },
    {
      id: 2,
      name: 'Michael Lee',
      profession: 'Restaurant Critic',
      text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.',
      image: '/image/testimonial-2.jpg',
    },
    {
      id: 3,
      name: 'Sarah Williams',
      profession: 'Chef Consultant',
      text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.',
      image: '/image/testimonial-3.jpg',
    },
  ]

  const data = testimonials && testimonials.length ? testimonials : defaultTestimonials
  const [current, setCurrent] = useState(0)

  return (
    <Container>
      <section aria-labelledby="testimonial-heading" className="px-4 sm:px-6 lg:px-12 py-12 text-center">
        <p className="text-yellow-500 uppercase tracking-wider text-sm mb-2">Testimonial</p>
        <h2 id="testimonial-heading" className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8">
          Our Clients Say!!!
        </h2>

        <div className="relative max-w-5xl mx-auto overflow-hidden">
          {/* Slide */}
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
            {data.map((item, index) => (
              <article
                key={item.id}
                className={`min-w-full px-6 sm:px-12 flex flex-col items-center justify-center transition-all duration-500 ease-out ${
                  current === index ? 'opacity-100' : 'opacity-0'
                }`}
                aria-label={`${item.name} - ${item.profession}`}
              >
                <div
                  className={`bg-white rounded-xl shadow-md border border-gray-100 transition-all duration-300 p-8 max-w-2xl cursor-pointer hover:bg-yellow-400 hover:text-white`}
                >
                  <span className="text-4xl font-serif">“</span>
                  <p className="text-base sm:text-lg leading-relaxed mb-6">{item.text}</p>

                  <div className="flex items-center justify-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image src={item.image} alt={item.name} fill sizes="48px" style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-gray-900 group-hover:text-yellow-600">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.profession}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-3 mt-6">
            {data.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === index ? 'bg-[#feb445] scale-110' : 'bg-gray-300 hover:bg-[#FEA116]'
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </Container>
  )
}