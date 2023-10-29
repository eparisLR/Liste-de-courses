import { getOneRecipe } from "../../../modules/recipes/recipes.service";
import { Recipe } from "../../../modules/recipes/recipes.types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function RecipeView() {
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
  return (
    <div className="flex p-4 gap-3">
      <div className="flex flex-col gap-3">
        <Link href="/">Retour</Link>
        {recipe?.image && (
          <Image
            width="300"
            alt="illustration de la recette"
            height="100"
            src={recipe.image.url}
          />
        )}
        <h3 className="font-bold">Ingr&eacute;dients :</h3>
        <ul>
          {recipe?.ingredients.map((ingredient, idx) => {
            return <li key={ingredient.name + idx}>{ingredient.name}</li>;
          })}
        </ul>
      </div>
      <div className="flex flex-col">
        <h2 className="font-bold text-2xl mb-2">{recipe?.name}</h2>
        {recipe?.steps.map((step, idx) => {
          return (
            <>
              <h3 className="font-bold">{step.name}</h3>
              <p>{step.instructions}</p>
            </>
          );
        })}
      </div>
    </div>
  );
}
