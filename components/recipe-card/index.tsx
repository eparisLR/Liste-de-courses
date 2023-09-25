import { IRecipeCardProps } from "./recipe-card.type";
import Image from "next/image";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

const RecipeCard = ({ recipe }: IRecipeCardProps) => {
  return (
    <>
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4>{recipe.name}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            src={recipe.image.url}
            alt={recipe.image.alt}
            className="object-cover rounded-xl"
            width="100"
            height="100"
            priority={false}
          />
        </CardBody>
      </Card>
    </>
  );
};

export default RecipeCard;
