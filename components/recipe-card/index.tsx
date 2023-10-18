import { IRecipeCardProps } from "./recipe-card.type";
import Image from "next/image";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";

const RecipeCard = ({ recipe }: IRecipeCardProps) => {
  return (
    <>
      <Card shadow="sm" isPressable className="ldc-card">
        <CardBody className="overflow-visible">
          <Image
            src={recipe.image.url}
            alt={recipe.image.alt}
            className="w-full object-cover h-[200px]"
            width="150"
            height="150"
            priority={false}
          />
        </CardBody>
        <CardFooter className="text-small justify-between">
          <b>{recipe.name}</b>
        </CardFooter>
      </Card>
    </>
  );
};

export default RecipeCard;
