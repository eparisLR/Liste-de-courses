export const recipesEndpoints = Object.freeze({
  getAllRecipes: new URL(`${process.env.BASE_RECIPES_API_URL}/recipes`),
  getOneRecipe: new URL(`${process.env.BASE_RECIPES_API_URL}/recipes/`),
  saveRecipe: new URL(`${process.env.BASE_RECIPES_API_URL}/recipes`),
  editRecipe: new URL(`${process.env.BASE_RECIPES_API_URL}/recipes/`),
  deleteRecipe: new URL(`${process.env.BASE_RECIPES_API_URL}/recipes/`),
});
