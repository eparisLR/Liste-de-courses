import { error } from "console";
import { recipesEndpoints } from "./recipes.endpoints";
import { IRecipe, Recipe } from "./recipes.types";
import { toast } from "sonner";

export const getAllRecipes = async () => {
  return fetch(recipesEndpoints.getAllRecipes.href, {
    method: "GET",
    headers: { "Content-type": "application/json" },
  })
    .then(async (results) => {
      return results.json().then((recipes) => recipes as IRecipe[]);
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};

export const getOneRecipe = (id: number) => {
  return fetch(recipesEndpoints.getOneRecipe.href + id, {
    method: "GET",
    headers: { "Content-type": "application/json" },
  })
    .then(async (result) => {
      return result.json().then((recipe) => recipe as Recipe);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const saveRecipe = async (recipe: Recipe) => {
  fetch(recipesEndpoints.saveRecipe.href, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(recipe),
  })
    .then(async (result) => {
      toast.success("La recette a bien été ajoutée", { position: "top-right" });
    })
    .catch((error) => {
      console.error(error);
    });
};

export const editRecipe = async (recipe: Recipe, id: number) => {
  fetch(recipesEndpoints.editRecipe.href + id, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(recipe),
  })
    .then(async (result) => {
      toast.success("La recette a bien été modifiée", {
        position: "top-right",
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

export const deleteRecipe = async (recipeId: number) => {
  fetch(recipesEndpoints.deleteRecipe.href + recipeId, {
    method: "DELETE",
    headers: { "Content-type": "application/json" },
  })
    .then(async (result) => {
      toast.success("La recette a bien été supprimée", {
        position: "top-right",
      });
    })
    .catch((error) => {
      console.error(error);
    });
};
