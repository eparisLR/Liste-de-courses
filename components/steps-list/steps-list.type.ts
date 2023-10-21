import { IStep } from "@/modules/recipes/recipes.types";

export interface StepsListProps {
  handleStepsChanges(steps: IStep[]): void;
  recipeSteps: IStep[];
}
