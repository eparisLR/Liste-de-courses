import React from "react";
import SideMenuLinkList from "./LinkList";
import {
  HiOutlineBookOpen,
  HiOutlineBookmark,
  HiOutlineInboxStack,
  HiOutlineCog8Tooth,
} from "react-icons/hi2";

describe("<SideMenuLinkList />", () => {
  it("renders and have 4 children", async () => {
    // see: https://on.cypress.io/mounting-react
    const leftMenuItems = [
      {
        icon: <HiOutlineBookOpen size={23} />,
        path: "/",
        linkName: "Catalogue",
      },
      {
        icon: <HiOutlineBookmark size={23} />,
        path: "/favorites",
        linkName: "Favoris",
      },
      {
        icon: <HiOutlineInboxStack size={23} />,
        path: "/history",
        linkName: "Historique",
      },
      {
        icon: <HiOutlineCog8Tooth size={23} />,
        path: "/settings",
        linkName: "Paramètres",
      },
    ];
    cy.mount(<SideMenuLinkList links={leftMenuItems} />);
    cy.get("[data-cy=linkList]")
      .children()
      .should("have.length", leftMenuItems.length);
  });
});
