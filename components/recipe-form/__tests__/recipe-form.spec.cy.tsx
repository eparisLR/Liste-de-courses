import { RECIPE_TYPE } from "@/modules/recipes/recipes.types";
import RecipeForm from "..";

describe("<RecipeForm/>", () => {
  it("Should mount", () => {
    cy.mount(<RecipeForm />);
  });
});
