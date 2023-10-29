import { getAllRecipes } from "../../modules/recipes/recipes.service";
import { Recipe } from "../../modules/recipes/recipes.types";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
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
      <Table>
        <TableHeader>
          <TableColumn>Recette</TableColumn>
          <TableColumn className="flex justify-end items-center">
            Actions
          </TableColumn>
        </TableHeader>
        <TableBody>
          {recipes &&
            recipes.map((recipe, idx) => {
              return (
                <TableRow key={idx}>
                  <TableCell>{recipe.name}</TableCell>
                  <TableCell className="flex gap-3 justify-end">
                    <Link
                      href={{ pathname: "/admin/edit", query: { id: idx + 1 } }}
                    >
                      <FaEdit size="23" />
                    </Link>
                    <MdDeleteForever size="23" className="text-danger" />
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </>
  );
}
