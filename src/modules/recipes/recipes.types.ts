/**
 * INTERFACES
 */
export interface IRecipe {
  id: number;
  name: string;
  image: IImage;
  season: SEASONS;
  ingredients: IIngredient[];
  steps: IStep[];
  category: RECIPE_CATEGORIES;
  difficulty: "Facile" | "Intermédiaire" | "Difficile";
  time: number;
  stars: number;
}

export interface IIngredient {
  category: INGREDIENTS_CATEGORIES;
  name: string;
  quantity: number;
}

export enum SEASONS {
  AUTUMN = "Automne",
  WINTER = "Hiver",
  SPRING = "Printemps",
  SUMMER = "Été",
}

export enum INGREDIENTS_CATEGORIES {
  VEGETABLES = "vegetables",
  MEAT = "meat",
  CONDIMENT = "condiment",
  STARCHY = "starchy",
}

export enum RECIPE_CATEGORIES {
  ENTREE = "Entrée",
  PLAT = "Plat",
  DESSERT = "Dessert",
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
  id: number = 0;
  category: RECIPE_CATEGORIES = RECIPE_CATEGORIES.ENTREE;
  name: string = "";
  image: IImage = { url: "", alt: "" };
  ingredients: IIngredient[] = [];
  steps: IStep[] = [];
  season: SEASONS = SEASONS.AUTUMN;
  difficulty: "Facile" | "Intermédiaire" | "Difficile" = "Facile";
  time: number = 3;
  stars: number = 3;
  constructor(
    name?: string,
    category?: RECIPE_CATEGORIES,
    ingredients?: IIngredient[],
    steps?: IStep[],
    season?: SEASONS,
    difficulty?: "Facile" | "Intermédiaire" | "Difficile",
    time?: number,
    stars?: number
  ) {
    this.name = name;
    this.category = category;
    this.ingredients = ingredients;
    this.steps = steps;
    this.season = season;
    this.difficulty = difficulty;
    this.time = time;
    this.stars = stars;
  }
}

export class Ingredient implements IIngredient {
  constructor() {}
  category = INGREDIENTS_CATEGORIES.VEGETABLES;
  name: string = "";
  quantity: number = 1;
}

export class Step implements IStep {
  name: string = "";
  instructions: string = "";
}

export class Image implements IImage {
  alt: string = "";
  url: string = "";
}
