import { ReactNode } from "react";

type MenuItem = { icon: ReactNode; path: URL; linkName: string };

export interface ISideMenuLinkListProps {
  links: MenuItem[];
}
