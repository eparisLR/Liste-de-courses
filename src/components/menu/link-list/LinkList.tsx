import SideMenuLink from "../link/Link";
import { ISideMenuLinkListProps } from "./LinkList.type";

export default function SideMenuLinkList({ links }: ISideMenuLinkListProps) {
  return (
    <ul className="list-none p-8" data-cy="linkList">
      {links.map((menuItem, idx) => (
        <SideMenuLink
          key={idx}
          path={menuItem.path}
          icon={menuItem.icon}
          linkName={menuItem.linkName}
        />
      ))}
    </ul>
  );
}
