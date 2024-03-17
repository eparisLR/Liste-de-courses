import { getAllRecipes } from "../../../modules/recipes/recipes.service";
import RecipeCard from "../card/RecipeCard";
import { IRecipeListProps } from "./RecipeList.type";

export default async function RecipesList({ label }: IRecipeListProps) {
  const recipes = await getAllRecipes();

  return (
    <>
      <h2 className="font-bold text-gray my-2">{label}</h2>
      <div className="w-full flex justify-between gap-2">
        {recipes &&
          recipes.map((r, index) => {
            return <RecipeCard recipe={r} key={`${r.name}-${index}`} />;
          })}
      </div>
    </>
  );
}
