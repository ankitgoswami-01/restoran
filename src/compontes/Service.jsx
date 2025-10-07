import React from "react";
import Container from "./Container";
import { FaUserTie, FaUtensils, FaShoppingCart, FaHeadset } from "react-icons/fa";

const services = [
  {
    icon: <FaUserTie />,
    title: "Master Chefs",
    desc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
  {
    icon: <FaUtensils />,
    title: "Quality Food",
    desc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
  {
    icon: <FaShoppingCart />,
    title: "Online Order",
    desc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Service",
    desc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
];

export default function Service() {
  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="group p-6 rounded-lg shadow-md text-center bg-white text-gray-700 transition-all duration-300 cursor-pointer hover:bg-yellow-500 hover:text-white hover:shadow-lg"
          >
            <div className="flex justify-center mb-4">
              {React.cloneElement(service.icon, {
                className:
                  "text-4xl text-yellow-500 transition-colors duration-300 group-hover:text-white",
              })}
            </div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
