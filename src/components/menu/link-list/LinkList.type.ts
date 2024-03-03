import { ReactNode } from "react";

type MenuItem = { icon: ReactNode; path: string; linkName: string };

export interface ISideMenuLinkListProps {
  links: MenuItem[];
}
