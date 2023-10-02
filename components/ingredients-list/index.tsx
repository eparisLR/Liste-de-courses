import {
  IIngredient,
  INGREDIENTS_TYPES,
} from "@/modules/recipes/recipes.types";
import { Button, Chip, Input, Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";

export default function IngredientsList() {
  const [ingredients, setIngredients] = useState([] as IIngredient[]);
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientType, setIngredientType] = useState("");
  return (
    <div className="flex gap-2">
      {ingredients.map((ingredient, index) => (
        <Chip
          key={index}
          onClose={() =>
            setIngredients(
              ingredients.filter((igd) => igd.name !== ingredient.name)
            )
          }
          variant="flat"
        >
          {ingredient.name}
        </Chip>
      ))}
      <Input
        name="ingredient"
        type="text"
        label="Ingrédient"
        onChange={(event) => setIngredientName(event.currentTarget.value)}
      />
      <Select
        label="Type de l'ingrédient"
        placeholder="Sélectionnez le type de l'ingrédient"
        onChange={(event) => {
          console.log(event);
          setIngredientType(
            Object.values(INGREDIENTS_TYPES)[+event.target.value]
          );
        }}
      >
        {Object.values(INGREDIENTS_TYPES).map((type, index) => {
          return (
            <SelectItem key={index} value={type}>
              {type}
            </SelectItem>
          );
        })}
      </Select>
      <Button
        onClick={() => {
          return setIngredients([
            ...ingredients,
            { name: ingredientName, type: ingredientType } as IIngredient,
          ]);
        }}
      >
        Ajouter l&apos;ingredient
      </Button>
    </div>
  );
}
