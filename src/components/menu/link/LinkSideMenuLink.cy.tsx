import React from "react";
import SideMenuLink from "./Link";
import { HiOutlineBookOpen } from "react-icons/hi2";

describe("<SideMenuLink />", () => {
  it("render one icon", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <SideMenuLink path="/" icon={<HiOutlineBookOpen />} linkName="home" />
    );
    cy.get("[data-cy=link]").get("svg").should("be.visible");
  });
  it("render the link with the correct linkName", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <SideMenuLink path="/" icon={<HiOutlineBookOpen />} linkName="home" />
    );
    cy.get("[data-cy=link]").get("a").should("have.text", "home");
  });
  it("render the link with the correct path", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <SideMenuLink path="/" icon={<HiOutlineBookOpen />} linkName="home" />
    );
    cy.get("[data-cy=link]")
      .get("a")
      .should("have.attr", "href")
      .and("include", "/");
  });
});
