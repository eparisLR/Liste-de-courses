import { IRecipeCardProps } from "./RecipeCard.type";
import Image from "next/image";
import { GiCookingPot } from "react-icons/gi";
import { BsBarChartFill } from "react-icons/bs";
import { HiStar } from "react-icons/hi2";

const RecipeCard = ({ recipe }: IRecipeCardProps) => {
  const recipeStars = Array.apply(null, new Array(recipe.stars));
  return (
    <>
      <div className="relative h-[22.5vh] grow">
        <div>
          <Image
            src="/images/image-illustration.jpg"
            alt="Image illustration"
            className="w-full object-cover h-[200px] rounded-3xl"
            width="150"
            height="250"
            priority={false}
          />
        </div>
        <div className="flex flex-col items-center bg-white p-4 rounded-3xl absolute bottom-0 w-full">
          <p className="text-gray" data-cy="recipe-title">
            {recipe.name}
          </p>
          <p className="flex my-2" data-cy="stars">
            {recipeStars.map((_, idx) => {
              return (
                <HiStar
                  key={`recipe-${recipe.id}-star-${idx}`}
                  className="mr-2 text-yellow"
                />
              );
            })}
          </p>
          <p className="w-full flex">
            <span
              className="block w-6/12 flex justify-center items-center text-gray"
              data-cy="difficulty"
            >
              <BsBarChartFill size={23} className="mr-2" />
              {recipe.difficulty}
            </span>
            <span
              className="block w-6/12 flex justify-center items-center text-gray"
              data-cy="time"
            >
              <GiCookingPot size={23} className="mr-2" /> {recipe.time} min
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
