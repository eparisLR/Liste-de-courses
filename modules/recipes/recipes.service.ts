import { error } from "console";
import { recipesEndpoints } from "./recipes.endpoints";
import { IRecipe, Recipe } from "./recipes.types";
import { toast } from "sonner";

export const getAllRecipes = async () => {
  return fetch(recipesEndpoints.getAllRecipes, {
    method: "GET",
    headers: { "Content-type": "application/json" },
  })
    .then(async (results) => {
      return results.json().then((recipes) => recipes as Recipe[]);
    })
    .catch((error) => {
      toast.error("Erreur lors de la récupération des recettes");
      console.log(error);
    });
};

export const saveRecipe = async (recipe: Recipe) => {
  fetch(recipesEndpoints.saveRecipe, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(recipe),
  })
    .then(async (result) => {
      toast.success("La recette a bien été ajoutée", { position: "top-right" });
    })
    .catch((error) => {
      toast.error("Erreur lors de l'ajout de la recette");
      console.log(error);
    });
};
