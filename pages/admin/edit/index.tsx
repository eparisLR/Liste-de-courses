import RecipeForm from "../../../components/recipe-form";
import { getOneRecipe } from "../../../modules/recipes/recipes.service";
import { Recipe } from "../../../modules/recipes/recipes.types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditRecipe() {
  const [recipe, setRecipe] = useState<Recipe>();
  const router = useRouter();
  useEffect(() => {
    async function fetchRecipe() {
      if (router.query.id) {
        const res = await getOneRecipe(+router.query.id);
        if (res) {
          setRecipe(res);
        }
      }
    }
    fetchRecipe();
  }, [router.query.id]);

  return <>{recipe && <RecipeForm recipe={recipe} />}</>;
}
