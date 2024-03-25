export const recipesEndpoints = Object.freeze({
  getAllRecipes: process.env.BASE_RECIPES_API_URL + "/recipes",
  getOneRecipe: process.env.NEXT_PUBLIC_BASE_RECIPES_API_URL + "/recipes/",
  saveRecipe: process.env.BASE_RECIPES_API_URL + "/recipes",
  editRecipe: process.env.BASE_RECIPES_API_URL + "/recipes/",
  deleteRecipe: process.env.BASE_RECIPES_API_URL + "/recipes/",
});
