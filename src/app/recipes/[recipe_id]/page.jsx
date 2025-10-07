
import { getRecipesById } from "@/api/libraray";
import Container from "@/compontes/Container";
import PageHeader from "@/compontes/PageHeader";
import Image from "next/image";
import React from "react";

// ✅ SEO Metadata
export async function generateMetadata({ params }) {
  const { recipe_id } = params;
  const recipe = await getRecipesById(recipe_id);

  if (!recipe) {
    return {
      title: "Recipe Not Found | SkyHub",
      description: "The recipe you’re looking for does not exist.",
    };
  }

  return {
    title: `${recipe.name} | SkyHub Recipes`,
    description: `Learn how to cook ${recipe.name} — a delicious ${recipe.cuisine} dish that's ${recipe.difficulty.toLowerCase()} to make and perfect for ${recipe.mealType.join(", ")}.`,
  };
}

// ✅ Recipe Page
export default async function Page({ params }) {
  const { recipe_id } = params;
  const recipe = await getRecipesById(recipe_id);

  return (
    <Container>
        <PageHeader title="Recipe Details page" />
        
      <section className="py-10">
        {/* Heading */}
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            {recipe.name}
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            {recipe.cuisine} • {recipe.difficulty} •{" "}
            {recipe.prepTimeMinutes + recipe.cookTimeMinutes} mins
          </p>
        </header>

        {/* Centered Recipe Image */}
        <div className="relative mx-auto w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] h-[220px] sm:h-[320px] md:h-[400px] lg:h-[480px] mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={recipe.image}
            alt={recipe.name}
            fill
            priority
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Ingredients and Instructions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ingredients */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3 text-yellow-600">
              Ingredients
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3 text-yellow-600">
              Instructions
            </h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>

        {/* Info Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          <div className="bg-yellow-100 py-6 rounded-lg shadow hover:shadow-md transition">
            <h4 className="font-semibold text-gray-800">Prep Time</h4>
            <p className="text-yellow-600">{recipe.prepTimeMinutes} mins</p>
          </div>
          <div className="bg-yellow-100 py-6 rounded-lg shadow hover:shadow-md transition">
            <h4 className="font-semibold text-gray-800">Cook Time</h4>
            <p className="text-yellow-600">{recipe.cookTimeMinutes} mins</p>
          </div>
          <div className="bg-yellow-100 py-6 rounded-lg shadow hover:shadow-md transition">
            <h4 className="font-semibold text-gray-800">Servings</h4>
            <p className="text-yellow-600">{recipe.servings} people</p>
          </div>
        </div>

        {/* Tags + Rating */}
        <div className="mt-10 text-center">
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Tags:</span>{" "}
            {recipe.tags.join(", ")}
          </p>
          <p className="text-gray-700">
            ⭐ {recipe.rating} ({recipe.reviewCount} reviews)
          </p>
        </div>
      </section>
    </Container>
  );
}

