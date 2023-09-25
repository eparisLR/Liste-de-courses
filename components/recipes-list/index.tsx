import { FC, useEffect, useState } from "react";
import { IRecipesListProps } from "./recipes-list.types";
import { getAllRecipes } from "@/modules/recipes/recipes.service";
import { Recipe } from "@/modules/recipes/recipes.types";
import RecipeCard from "../recipe-card";

export default function RecipesList() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    async function fetchData() {
      const res = await getAllRecipes();
      if (res) {
        setRecipes([...res]);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Liste des recettes</h1>
      {recipes.map((r, index) => {
        return <RecipeCard key={`${r.name}-${index}`} recipe={r} />;
      })}
    </>
  );
}
