"use client";

import { useEffect, useState } from "react";
import { IRecipeViewProps } from "./RecipeView.type";
import { useSearchParams } from "next/navigation";
import { IRecipe } from "../../../modules/recipes/recipes.types";
import { getOneRecipe } from "../../../modules/recipes/recipes.service";
import IngredientList from "../../ingredients/list/IngredientList";
import Image from "next/image";

export default function RecipeView({}: IRecipeViewProps) {
  const recipeId = useSearchParams().get("recipeId");
  const [recipe, setRecipe] = useState<IRecipe>();
  useEffect(() => {
    const fetchRecipeToView = async () => {
      const response = await getOneRecipe(+recipeId);
      if (response) {
        setRecipe(response);
      }
    };
    if (recipeId) {
      fetchRecipeToView();
    }
  }, [recipeId]);
  return (
    <>
      <div className="flex flex-col items-center mb-4">
        <Image
          src="/images/image-illustration.jpg"
          alt="Image illustration"
          className="w-full object-cover h-[200px] rounded-3xl"
          width="150"
          height="250"
          priority={false}
        />
        <h3 className="text-gray">{recipe?.name}</h3>
      </div>
      <IngredientList ingredients={recipe?.ingredients} />
    </>
  );
}
