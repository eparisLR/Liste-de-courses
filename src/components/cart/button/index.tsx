import { BsCart4 } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Recipe } from "../../../modules/recipes/recipes.types";
import { getAllRecipes } from "../../../modules/recipes/recipes.service";

const CartButton = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    async function fetchData() {
      const res = await getAllRecipes();
      if (res) {
        setRecipes([...res]);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <button>
        <BsCart4 size={23} />
      </button>
      <dialog>
        <div></div>
      </dialog>
    </>
  );
};

export default CartButton;
