export const recipesEndpoints = Object.freeze({
  getAllRecipes: process.env.NEXT_PUBLIC_BASE_RECIPES_API_URL,
  getOneRecipe: process.env.NEXT_PUBLIC_BASE_RECIPES_API_URL+"/",
  saveRecipe: process.env.NEXT_PUBLIC_BASE_RECIPES_API_URL,
  editRecipe: process.env.NEXT_PUBLIC_BASE_RECIPES_API_URL+"/",
  deleteRecipe: process.env.NEXT_PUBLIC_BASE_RECIPES_API_URL+"/",
});
