import { recipesEndpoints } from "./recipes.endpoints";
import { IRecipe, Recipe } from "./recipes.types"

export const getAllRecipes = async () => {
    return fetch(recipesEndpoints.getAllRecipes, {
        method: "GET",
        headers: {"Content-type": "application/json"}
    }).then(async (results) => {
        return results.json().then(recipes => recipes as Recipe[]);
    }).catch((error) => console.log(error));
}