import type { Metadata } from "next";

// These styles apply to every route in the application
import "./globals.css";
import SideMenuLinkList from "../components/menu/link-list/LinkList";
import {
  HiOutlineBookOpen,
  HiOutlineBookmark,
  HiOutlineInboxStack,
  HiOutlineCog8Tooth,
} from "react-icons/hi2";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Générateur de liste de courses",
  description: "Générateur de liste de courses",
  viewport: "width=device-width, initial-scale=1",
};

import localFont from "next/font/local";
import SideMenuBanner from "../components/menu/banner/SideMenuBanner";

const roboto = localFont({
  src: "../../public/fonts/Roboto-Regular.woff2",
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans flex`}>
        <aside className="h-screen">
          <Image
            src="/images/logo.png"
            width={150}
            height={150}
            alt="Logo du site"
            className="mx-12 mt-8"
          />
          <SideMenuLinkList links={leftMenuItems} />
          <SideMenuBanner
            title="Le super push"
            button={<button>test</button>}
          />
        </aside>
        {children}
      </body>
    </html>
  );
}
