/**
 * INTERFACES
 */
export interface IRecipe {
  name: string;
  image: IImage;
  ingredients: IIngredient[];
  steps: IStep[];
  type: RECIPE_TYPE;
}

export interface IIngredient {
  type: INGREDIENTS_TYPES;
  name: string;
}

export enum INGREDIENTS_TYPES {
  VEGETABLES = "vegetables",
  MEAT = "meat",
  CONDIMENT = "condiment",
  STARCHY = "starchy",
}

export enum RECIPE_TYPE {
  ENTREE = "entree",
  PLAT = "plat",
  DESSERT = "dessert",
}

export interface IStep {
  name: string;
  instructions: string;
}

export interface IImage {
  url: string;
  alt: string;
}

/**
 * CLASSES
 */
export class Recipe implements IRecipe {
  type: RECIPE_TYPE = RECIPE_TYPE.ENTREE;
  name: string = "";
  image: IImage = { url: "", alt: "" };
  ingredients: IIngredient[] = [];
  steps: IStep[] = [];
  constructor(
    name: string,
    type: RECIPE_TYPE,
    ingredients: IIngredient[],
    steps: IStep[]
  ) {
    this.name = name;
    this.type = type;
    this.ingredients = ingredients;
    this.steps = steps;
  }
}

export class Ingredient implements IIngredient {
  constructor() {}
  type = INGREDIENTS_TYPES.VEGETABLES;
  name: string = "";
}

export class Step implements IStep {
  name: string = "";
  instructions: string = "";
}

export class Image implements IImage {
  alt: string = "";
  url: string = "";
}
