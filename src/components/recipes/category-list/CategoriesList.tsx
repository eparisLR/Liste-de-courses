import { getAllCategories } from "../../../modules/categories/categories.service";
import CardCategory from "../card-category/CardCategory";

export default async function CategoriesList() {
  const categories = await getAllCategories();

  return (
    <>
      <h2 className="font-bold text-gray my-2">Catégories</h2>
      <div className="w-full flex gap-2">
        {categories.map((c) => (
          <CardCategory category={c} key={`${c.id}-${c.name}`} />
        ))}
      </div>
    </>
  );
}
