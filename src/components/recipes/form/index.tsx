"use client";
import {
  IIngredient,
  IStep,
  RECIPE_TYPE,
  Recipe,
  SEASONS,
} from "../../../modules/recipes/recipes.types";
import Link from "next/link";
import IngredientsList from "../ingredients-list";
import StepsList from "../steps-list";
import {
  editRecipe,
  saveRecipe,
} from "../../../modules/recipes/recipes.service";
import { RecipeFormProps } from "./recipe-form.type";

export default function RecipeForm({ recipe }: RecipeFormProps) {
  let recipeIngredients = recipe ? recipe.ingredients : ([] as IIngredient[]);
  let recipeSteps = recipe ? recipe.steps : ([] as IStep[]);
  let recipeName = recipe ? recipe.name : "";
  let recipeType = recipe ? recipe.type : RECIPE_TYPE.ENTREE;
  let recipeSeason = recipe ? recipe.season : SEASONS.AUTUMN;
  const handleIngredientsChanges = (ingredients: IIngredient[]) =>
    (recipeIngredients = ingredients);
  const handleStepsChanges = (steps: IStep[]) => (recipeSteps = steps);
  return (
    <>
      <form className="flex flex-col gap-3 w-full p-8">
        <h2>{recipe ? "Edition de la recette" : "Ajout d'une recette"}</h2>
        <div className="flex gap-3">
          <input
            name="recipeName"
            type="text"
            value={recipeName}
            placeholder="Nom de la recette..."
            onChange={(event) => (recipeName = event.currentTarget.value)}
          />

          <select
            name="recipeType"
            onChange={(event) => {
              recipeType = Object.values(RECIPE_TYPE)[+event.target.value];
            }}
          >
            {Object.values(RECIPE_TYPE).map((type) => {
              return (
                <option key={type} value={type}>
                  {type}
                </option>
              );
            })}
          </select>
          <select
            name="recipeSeason"
            onChange={(event) => {
              recipeSeason = Object.values(SEASONS)[+event.target.value];
            }}
          >
            {Object.values(SEASONS).map((season) => {
              return (
                <option key={season} value={season}>
                  {season}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex gap-2 justify-between">
          <IngredientsList
            handleIngredientsChanges={handleIngredientsChanges}
            recipeIngredients={recipeIngredients}
          />
          <StepsList
            handleStepsChanges={handleStepsChanges}
            recipeSteps={recipeSteps}
          />
        </div>
        <div className="flex flex-row-reverse gap-2 items-center">
          <button
            onClick={() => {
              if (recipe) {
                recipe.name = recipeName;
                recipe.type = recipeType;
                recipe.season = recipeSeason;
                recipe.ingredients = recipeIngredients;
                recipe.steps = recipeSteps;
                editRecipe(recipe, recipe.id);
              } else {
                let recipeToSave = new Recipe(
                  recipeName,
                  recipeType,
                  recipeIngredients,
                  recipeSteps,
                  recipeSeason
                );
                saveRecipe(recipeToSave);
              }
            }}
          >
            Enregistrer
          </button>
          <Link href="/admin">Annuler</Link>
        </div>
      </form>
    </>
  );
}
