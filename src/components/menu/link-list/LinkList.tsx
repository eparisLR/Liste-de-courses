import SideMenuLink from "../link/Link";
import { ISideMenuLinkListProps } from "./LinkList.type";

export default async function SideMenuLinkList({
  links,
}: ISideMenuLinkListProps) {
  return (
    <ul className="list-none p-8">
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
