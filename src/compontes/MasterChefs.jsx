import React from 'react'
import Image from 'next/image'
import Container from './Container'

export default function MasterChefs({ chefs }) {
  const defaultChefs = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Head Chef',
      image: '/image/team-1.jpg',
    },
    {
      id: 2,
      name: 'Mark Smith',
      role: 'Pastry Chef',
      image: '/image/team-2.jpg',
    },
    {
      id: 3,
      name: 'Alex Brown',
      role: 'Sous Chef',
      image: '/image/team-3.jpg',
    },
    {
      id: 4,
      name: 'David Lee',
      role: 'Sauce Master',
      image: '/image/team-4.jpg',
    },
  ]

  const list = chefs && chefs.length ? chefs : defaultChefs

  return (
    <Container>
      <section aria-labelledby="team-heading" className="px-4 sm:px-6 lg:px-12 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-yellow-500 uppercase tracking-wider text-sm mb-2">Team Members</p>
          <h2 id="team-heading" className="text-3xl sm:text-4xl font-bold text-[#0F172B] mb-2">
            Our Master Chefs
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {list.map((chef) => (
            <article
              key={chef.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 ease-out overflow-hidden relative cursor-pointer"
              aria-label={`${chef.name} - ${chef.role}`}
            >
              <div className="p-6 flex flex-col items-center">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <Image
                    src={chef.image}
                    alt={chef.name}
                    fill
                    sizes="(max-width: 640px) 144px, (max-width: 1024px) 176px, 192px"
                    style={{ objectFit: 'cover' }}
                    priority={false}
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-transparent group-hover:ring-yellow-400/60 transition-all duration-300"></div>
                </div>

                <div className="mt-5 text-center">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">{chef.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{chef.role}</p>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white/90 to-transparent pointer-events-none"></div>
            </article>
          ))}
        </div>
      </section>
    </Container>
  )
}
