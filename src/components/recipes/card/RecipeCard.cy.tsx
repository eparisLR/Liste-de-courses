import React from "react";
import RecipeCard from "./RecipeCard";
import {
  INGREDIENTS_CATEGORIES,
  RECIPE_CATEGORIES,
  Recipe,
  SEASONS,
} from "../../../modules/recipes/recipes.types";

const mockRecipe = new Recipe(
  "Ma recette",
  RECIPE_CATEGORIES.DESSERT,
  [{ category: INGREDIENTS_CATEGORIES.VEGETABLES, name: "Pomme de terre" }],
  [{ name: "Titre étape 1", instructions: "Instructins" }],
  SEASONS.AUTUMN,
  "Difficile",
  10,
  2
);

describe("<RecipeCard />", () => {
  it("renders with the correct number of stars", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<RecipeCard recipe={mockRecipe} />);
    cy.get("[data-cy='stars']")
      .children()
      .should("have.length", mockRecipe.stars);
  });

  it("renders with the correct time", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<RecipeCard recipe={mockRecipe} />);
    cy.get("[data-cy='time']").should("contain.text", mockRecipe.time);
  });

  it("renders with the correct difficulty", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<RecipeCard recipe={mockRecipe} />);
    cy.get("[data-cy='difficulty']").should(
      "contain.text",
      mockRecipe.difficulty
    );
  });

  it("renders with the correct name", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<RecipeCard recipe={mockRecipe} />);
    cy.get("[data-cy='recipe-title']").should("contain.text", mockRecipe.name);
  });
});
