import { getAllRecipes } from "../../../modules/recipes/recipes.service";
import RecipeCard from "../item/RecipeCard";

export default async function RecipesList() {
  const recipes = await getAllRecipes();

  return (
    <>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {recipes &&
          recipes.map((r, index) => {
            return (
              <div key={`${r.name}-${index}`}>
                <RecipeCard recipeId={r.id} recipe={r} />
              </div>
            );
          })}
      </div>
    </>
  );
}
