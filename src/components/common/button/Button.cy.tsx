import React from "react";
import Button from "./Button";
import { ButtonColorsEnum } from "./Button.type";
import { HiOutlineBookOpen } from "react-icons/hi2";

describe("<Button />", () => {
  it("renders with the text and color", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Button color={ButtonColorsEnum.GREEN} text="test" />);
    cy.get("[data-cy=button]")
      .should("have.text", "test")
      .and("have.class", "bg-green");
  });
  it("renders with the icon", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <Button
        color={ButtonColorsEnum.GREEN}
        text="test"
        icon={<HiOutlineBookOpen />}
      />
    );
    cy.get("[data-cy=button]").get("svg").should("be.visible");
  });
});
