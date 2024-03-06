import { IRecipeCardProps } from "./recipe-card.type";
import Image from "next/image";
import { GiCookingPot } from "react-icons/gi";
import { BsBarChartFill } from "react-icons/bs";
import { HiStar } from "react-icons/hi2";

const RecipeCard = ({ recipe, recipeId }: IRecipeCardProps) => {
  return (
    <>
      <div className="relative">
        <div className="overflow-visible">
          <Image
            src="/images/image-illustration.jpg"
            alt="Image illustration"
            className="w-full object-cover h-[200px] rounded-3xl"
            width="150"
            height="150"
            priority={false}
          />
        </div>
        <div className="flex flex-col items-center bg-white p-4 rounded-3xl absolute bottom-0 w-full">
          <p>{recipe.name}</p>
          <p className="flex">
            <HiStar />
            <HiStar />
            <HiStar />
            <HiStar />
            <HiStar />
          </p>
          <p className="w-full flex">
            <span className="block w-6/12 flex justify-center">
              <BsBarChartFill size={23} />
              {recipe.difficulty}
            </span>
            <span className="block w-6/12 flex justify-center">
              <GiCookingPot size={23} /> {recipe.time} min
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
