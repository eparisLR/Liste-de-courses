import RecipesList from "../components/recipes/list";

export default async function Home() {
  return (
    <>
      <main className="bg-light-gray w-full p-8">
        <RecipesList />
      </main>
    </>
  );
}
