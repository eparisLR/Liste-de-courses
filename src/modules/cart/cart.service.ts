import { toast } from "sonner";
import { recipesEndpoints } from "../recipes/recipes.endpoints";
import { IRecipe } from "../recipes/recipes.types";

interface CartInfos {
  recipeIds: number[];
}

const KEY_RECIPES_CART = "recipeInCart";

export const addToCart = (recipeId: number) => {
  const cartInfos: CartInfos = JSON.parse(
    localStorage.getItem(KEY_RECIPES_CART)
  );
  if (cartInfos) {
    cartInfos.recipeIds.push(recipeId);
    localStorage.setItem(KEY_RECIPES_CART, JSON.stringify(cartInfos));
  } else {
    localStorage.setItem(
      KEY_RECIPES_CART,
      JSON.stringify({ recipeIds: [recipeId] })
    );
  }
};

export const removeFromCart = (recipeId: number) => {
  const cartInfos: CartInfos = JSON.parse(
    localStorage.getItem(KEY_RECIPES_CART)
  );
  cartInfos.recipeIds = cartInfos.recipeIds.filter((id) => id !== recipeId);
  localStorage.setItem(KEY_RECIPES_CART, JSON.stringify(cartInfos));
};

export const getRecipesFromStorage = () => {
  const cartInfos: CartInfos = JSON.parse(
    localStorage.getItem(KEY_RECIPES_CART)
  );

  return cartInfos ?? { recipeIds: [] };
};

export const getAllIngredients = async () => {
  let allIngredients = [];
  const recipeIdsInCart = getRecipesFromStorage();
  const recipes = await fetch(recipesEndpoints.getAllRecipes, {
    method: "GET",
    headers: { "Content-type": "application/json" },
  })
    .then(async (results) => {
      return results.json().then((recipes) => recipes as IRecipe[]);
    })
    .catch((error) => {
      toast.error("Erreur lors de la récupération des recettes", {
        position: "top-right",
      });
      console.error(error);
    });

  if (recipes) {
    recipes
      .filter((r) => recipeIdsInCart.recipeIds.includes(r.id))
      .forEach((recipe) => {
        recipe.ingredients.forEach((ingredient) => {
          if (!allIngredients.includes(ingredient.name))
            allIngredients.push(ingredient.name);
        });
      });
  }

  console.log(allIngredients);

  return allIngredients;
};
