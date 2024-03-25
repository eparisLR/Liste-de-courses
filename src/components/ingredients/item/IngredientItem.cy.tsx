import React from "react";
import IngredientItem from "./IngredientItem";
import {
  IIngredient,
  INGREDIENTS_CATEGORIES,
} from "../../../modules/recipes/recipes.types";

const mockIngredient: IIngredient = {
  category: INGREDIENTS_CATEGORIES.VEGETABLES,
  name: "Courgettes",
  quantity: 500,
};

describe("<IngredientItem />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<IngredientItem ingredient={mockIngredient} />);
  });

  it("renders with the correct datas", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<IngredientItem ingredient={mockIngredient} />);
    cy.get("p")
      .should("contain.text", mockIngredient.quantity.toString())
      .and("contain.text", mockIngredient.name);
  });
});
