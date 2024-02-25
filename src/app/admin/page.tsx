import {
  deleteRecipe,
  getAllRecipes,
} from "../../modules/recipes/recipes.service";
import { Recipe } from "../../modules/recipes/recipes.types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";

export default function Administration() {
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
      <Link href="/" className="flex justify-items-center pb-2">
        <span>Retour</span>
      </Link>
      <Link href="/admin/add" className="flex justify-items-center pb-2">
        <AiOutlinePlus size="23" />
        <span>Ajout d&apos;une recette</span>
      </Link>
      <table>
        <th>
          <td>Recette</td>
          <td className="flex justify-end items-center">Actions</td>
        </th>
        <tbody>
          {recipes &&
            recipes.map((recipe, idx) => {
              return (
                <tr key={idx}>
                  <td>{recipe.name}</td>
                  <td className="flex gap-3 justify-end">
                    <Link
                      href={{
                        pathname: "/admin/edit",
                        query: { id: recipe.id },
                      }}
                    >
                      <FaEdit size="23" />
                    </Link>
                    <button
                      color="danger"
                      aria-label="Delete recipe"
                      onClick={() => {
                        deleteRecipe(recipe.id).then((_) =>
                          setRecipes(recipes.filter((r) => r.id !== recipe.id))
                        );
                      }}
                    >
                      <MdDeleteForever size="23" color="danger" />
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
