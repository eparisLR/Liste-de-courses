export interface IRecipe {
    name: string,
    image: IImage,
    ingredients: IIngredient[];
    steps: IStep[],
    type: RECIPE_TYPE
}

export interface IIngredient {
    type: INGREDIENTS_TYPES,
    name: string
}

export enum INGREDIENTS_TYPES {
    VEGETABLES="vegetables",
    MEAT="meat",
    CONDIMENT="condiment",
    STARCHY="starchy"
}

export enum RECIPE_TYPE {
    ENTREE="entree",
    PLAT="plat",
    DESSERT="dessert"
}

export interface IStep {
    name: string,
    instructions: string
}

export interface IImage {
    url: string,
    alt: string
}

export class Recipe implements IRecipe {
    constructor() {}
    type: RECIPE_TYPE = RECIPE_TYPE.ENTREE;
    name: string = "";
    image: IImage = {url: "", alt: ""};
    ingredients: IIngredient[] = [];
    steps: IStep[] = [];
}