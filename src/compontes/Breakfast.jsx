import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { getRecipes } from "@/api/libraray";

export const metadata = {
  title: "Popular Breakfast Recipes | SkyHub",
  description:
    "Explore SkyHub’s most popular breakfast recipes including healthy, quick, and delicious options to start your day right.",
};

export default async function Breakfast() {
  const recipes = await getRecipes();

  return (
    <Container>
      <section className="py-10">
        {/* Heading */}
        <header className="text-center mb-8">
          <h1 className="text-sm text-orange-500 font-semibold uppercase">
            Breakfast Menu
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F172B]">
            Popular Breakfast Items
          </h2>
        </header>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recipes.slice(0, 12).map((item) => (
            <Link
              key={item.id}
              href={`/recipes/${item.id}`} // ✅ recipe details page route
              className="card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1"
            >
              {/* Image */}
              <div className="w-full h-40 relative">
                <Image
                  src={item.image || "/fallback.jpg"}
                  alt={item.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1 hover:text-orange-500 transition">
                  {item.name}
                </h3>

                {/* MealType + Cuisine */}
                <p className="text-sm text-gray-500 mb-2">
                  {item.mealType ? item.mealType.join(", ") : "Meal"} |{" "}
                  {item.cuisine || "Cuisine"}
                </p>

                {/* Calories + Time */}
                <div className="flex justify-between text-sm text-gray-600">
                  <span className="text-orange-500 font-bold">
                    {item.caloriesPerServing
                      ? `${item.caloriesPerServing} cal`
                      : "N/A"}
                  </span>
                  <span>
                    ⏱ {item.prepTimeMinutes || item.cookTimeMinutes || "10"} min
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Container>
  );
}
