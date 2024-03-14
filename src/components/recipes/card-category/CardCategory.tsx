import { CardCategoryProps } from "./CardCategory.type";

export default function CardCategory({ category }: CardCategoryProps) {
  // TODO: Ajouter une image
  return (
    <div className="bg-white p-4 rounded-xl">
      <span className="text-brown-gray">{category.name}</span>
    </div>
  );
}
