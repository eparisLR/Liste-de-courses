import React from "react";
import SideMenuBanner from "./SideMenuBanner";

describe("<SideMenuBanner />", () => {
  it("renders with the correct title", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SideMenuBanner title="Test title" />);
    cy.get("[data-cy=sidemenu-banner]").should("have.text", "Test title");
  });

  it("renders with a button", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SideMenuBanner title="Test title" button={<button></button>} />);
    cy.get("[data-cy=sidemenu-banner]").get("button").should("be.visible");
  });
});
