import RecipeForm from "../../../components/recipes/form";
import { getOneRecipe } from "../../../modules/recipes/recipes.service";
import { Recipe } from "../../../modules/recipes/recipes.types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditRecipe({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [recipe, setRecipe] = useState<Recipe>();
  const router = useRouter();
  useEffect(() => {
    async function fetchRecipe() {
      if (params.id) {
        const res = await getOneRecipe(+params.id);
        if (res) {
          setRecipe(res);
        }
      }
    }
    fetchRecipe();
  }, [params.id]);

  return <>{recipe && <RecipeForm recipe={recipe} />}</>;
}
