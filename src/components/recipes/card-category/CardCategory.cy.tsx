import React from "react";
import CardCategory from "./CardCategory";

const mockCategory = { id: 1, name: "Entrée" };

describe("<CardCategory />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CardCategory category={mockCategory} />);
    cy.get("span.text-brown-gray").should("have.text", mockCategory.name);
  });
});
