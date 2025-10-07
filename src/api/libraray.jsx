// ✅ Fetch all recipes
async function getRecipes() {
  const response = await fetch("https://dummyjson.com/recipes", {
    cache: "no-store",
  });
  const data = await response.json();

  if (data && data.recipes) {
    return data.recipes;
  } else {
    return [];
  }
}


async function getRecipesById(id) {
  const response = await fetch(`https://dummyjson.com/recipes/${id}`, {
    cache: "no-store",
  });
  const data = await response.json();

  
  if (data && data.id) {
    return data;
  } else {
    return null;
  }
}


export { getRecipes, getRecipesById };
