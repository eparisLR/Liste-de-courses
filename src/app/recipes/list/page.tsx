import { getAllIngredients } from "../../../modules/cart/cart.service";

export default async function PageListGenerator() {
  const allIngredients = await getAllIngredients();

  return (
    <>
      {allIngredients !== null &&
        allIngredients.map((ingredient, id) => {
          return <p key={ingredient.toLowerCase() + id}>{ingredient}</p>;
        })}
    </>
  );
}
