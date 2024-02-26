import RecipeForm from "../../../components/recipes/form";
import { getOneRecipe } from "../../../modules/recipes/recipes.service";

export default async function EditRecipe({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const recipe = await getOneRecipe(+params.id);

  return <>{recipe && <RecipeForm recipe={recipe} />}</>;
}
