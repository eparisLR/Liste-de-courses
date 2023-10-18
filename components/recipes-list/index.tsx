import { useEffect, useState } from "react";
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
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {recipes.map((r, index) => {
          return <RecipeCard key={`${r.name}-${index}`} recipe={r} />;
        })}
      </div>
    </>
  );
}
