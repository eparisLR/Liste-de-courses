import RecipeBanner from "../components/recipes/banner/RecipeBanner";
import CategoriesList from "../components/recipes/category-list/CategoriesList";
import RecipesList from "../components/recipes/list/RecipeList";

export default async function Home() {
  return (
    <>
      <main className="bg-light-gray w-3/5 p-8">
        <RecipeBanner />
        <CategoriesList />
        <RecipesList label="Pour vous" />
        <RecipesList label="Recettes populaires" />
      </main>
    </>
  );
}
