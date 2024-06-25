import { CategoriesEndpoints } from "./categories.endpoints";
import { ICategory } from "./categories.type";

export const getAllCategories = async () => {
  return fetch(CategoriesEndpoints.getAllCategories.href, {
    method: "GET",
    headers: { "Content-type": "application/json" },
  })
    .then(async (results) => {
      return results.json().then((categories) => categories as ICategory[]);
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};
