import { getOneRecipe } from "../../../modules/recipes/recipes.service";
import { Recipe } from "../../../modules/recipes/recipes.types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default async function RecipeView({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const recipe = await getOneRecipe(+params.id);
  return (
    <div className="flex p-4 gap-3">
      <div className="flex flex-col gap-3">
        <Link href="/">Retour</Link>
        {recipe && recipe?.image && (
          <Image
            width="300"
            alt="illustration de la recette"
            height="100"
            src={recipe.image.url}
          />
        )}
        <h3 className="font-bold">Ingr&eacute;dients :</h3>
        <ul>
          {recipe &&
            recipe?.ingredients.map((ingredient, idx) => {
              return <li key={ingredient.name + idx}>{ingredient.name}</li>;
            })}
        </ul>
      </div>
      <div className="flex flex-col">
        <h2 className="font-bold text-2xl mb-2">{recipe && recipe?.name}</h2>
        {recipe &&
          recipe?.steps.map((step, idx) => {
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
