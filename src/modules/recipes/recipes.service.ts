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
      return results.json().then((recipes) => recipes as IRecipe[]);
    })
    .catch((error) => {
      toast.error("Erreur lors de la récupération des recettes", {
        position: "top-right",
      });
      console.error(error);
    });
};

export const getOneRecipe = (id: number) => {
  return fetch(recipesEndpoints.getOneRecipe + id, {
    method: "GET",
    headers: { "Content-type": "application/json" },
  })
    .then(async (result) => {
      return result.json().then((recipe) => recipe as Recipe);
    })
    .catch((error) => {
      toast.error("Erreur lors de la récupération de la recette", {
        position: "top-right",
      });
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
      console.error(error);
    });
};

export const editRecipe = async (recipe: Recipe, id: number) => {
  fetch(recipesEndpoints.editRecipe + id, {
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
      toast.error("Erreur lors de l'ajout de la recette", {
        position: "top-right",
      });
      console.error(error);
    });
};

export const deleteRecipe = async (recipeId: number) => {
  fetch(recipesEndpoints.deleteRecipe + recipeId, {
    method: "DELETE",
    headers: { "Content-type": "application/json" },
  })
    .then(async (result) => {
      toast.success("La recette a bien été supprimée", {
        position: "top-right",
      });
    })
    .catch((error) => {
      toast.error("Erreur lors de la suppression de la recette", {
        position: "top-right",
      });
      console.error(error);
    });
};
