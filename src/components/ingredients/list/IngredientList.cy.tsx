import React from "react";
import IngredientList from "./IngredientList";
import {
  IIngredient,
  INGREDIENTS_CATEGORIES,
} from "../../../modules/recipes/recipes.types";

const mockIngredientList: IIngredient[] = [
  {
    category: INGREDIENTS_CATEGORIES.VEGETABLES,
    name: "Courgettes",
    quantity: 500,
  },
  {
    category: INGREDIENTS_CATEGORIES.VEGETABLES,
    name: "Courgettes",
    quantity: 500,
  },
  {
    category: INGREDIENTS_CATEGORIES.VEGETABLES,
    name: "Courgettes",
    quantity: 500,
  },
];

describe("<IngredientList />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<IngredientList ingredients={mockIngredientList} />);
  });
  it("render the correct number of items", () => {
    cy.mount(<IngredientList ingredients={mockIngredientList} />);
    cy.get("div")
      .children("p")
      .should("have.length", mockIngredientList.length);
  });
});
