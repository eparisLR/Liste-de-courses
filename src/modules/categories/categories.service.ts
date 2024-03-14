import { ICategory } from "./categories.type";

export const getAllCategories = async () => {
  return fetch(
    `${await process.env.NEXT_PUBLIC_BASE_RECIPES_API_URL}/categories`,
    {
      method: "GET",
      headers: { "Content-type": "application/json" },
    }
  )
    .then(async (results) => {
      return results.json().then((categories) => categories as ICategory[]);
    })
    .catch((error) => {
      console.error(error);
    });
};
