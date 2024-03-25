import IngredientItem from "../item/IngredientItem";
import { IIngredientListProps } from "./IngredientList.type";

export default function IngredientList({ ingredients }: IIngredientListProps) {
  return (
    <div className="flex flex-col">
      <h3 className="text-gray font-bold mb-2">Liste d&apos;ingrédients</h3>
      {ingredients &&
        ingredients.map((i, idx) => (
          <IngredientItem ingredient={i} key={i.name + idx.toString()} />
        ))}
    </div>
  );
}
