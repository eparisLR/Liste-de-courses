import { HiHome } from "react-icons/hi2";
import SideMenuLink from "../link/Link";

export default async function SideMenuLinkList() {
  const BASE_UI_URL = await process.env.UI_BASE_URL;
  const menuItems = [
    {
      icon: <HiHome size={23} />,
      path: new URL("/", BASE_UI_URL),
      linkName: "Accueil",
    },
  ];
  return (
    <>
      {menuItems.map((menuItem, idx) => (
        <SideMenuLink
          key={idx}
          path={menuItem.path}
          icon={menuItem.icon}
          linkName={menuItem.linkName}
        />
      ))}
    </>
  );
}
