import { IIngredientItemProps } from "./IngredientItem.type";

export default function IngredientItem({ ingredient }: IIngredientItemProps) {
  return (
    <p>
      {`${ingredient.quantity}g `}
      {ingredient.name}
    </p>
  );
}
