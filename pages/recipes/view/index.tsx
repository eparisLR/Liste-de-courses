import { useRouter } from "next/router";

export default function RecipeView() {
  const router = useRouter();
  return (
    <>
      <p>{router.query.id}</p>
    </>
  );
}
