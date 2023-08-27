import { FC } from "react";
import { IRecipeCardProps } from "./recipe-card.type";

const RecipeCard: FC<IRecipeCardProps> = ({recipe}) => {
    return(
        <div>
            <a><img src={recipe.image.url} alt={recipe.image.alt}/></a>
            <h3>{recipe.name}</h3>
        </div>
    )
}

export default RecipeCard;