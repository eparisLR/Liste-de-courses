import { useEffect, useState } from "react";
import { getAllIngredients } from "../../../modules/cart/cart.service";

export default function PageListGenerator() {
  const [allIngredients, setIngredients] = useState<string[]>();
  useEffect(() => {
    async function fetchData() {
      const res = await getAllIngredients();
      if (res) {
        setIngredients([...res]);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {allIngredients &&
        allIngredients.map((ingredient, id) => {
          return <p key={ingredient.toLowerCase() + id}>{ingredient}</p>;
        })}
    </>
  );
}
