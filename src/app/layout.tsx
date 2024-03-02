import type { Metadata } from "next";

// These styles apply to every route in the application
import "./globals.css";
import Head from "next/head";
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
};

import localFont from "next/font/local";

const roboto = localFont({
  src: "../../public/fonts/Roboto-Regular.woff2",
  variable: "--font-roboto",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const BASE_UI_URL = await process.env.UI_BASE_URL;
  const leftMenuItems = [
    {
      icon: <HiOutlineBookOpen size={23} />,
      path: new URL("/", BASE_UI_URL),
      linkName: "Catalogue",
    },
    {
      icon: <HiOutlineBookmark size={23} />,
      path: new URL("/favorites/", BASE_UI_URL),
      linkName: "Favoris",
    },
    {
      icon: <HiOutlineInboxStack size={23} />,
      path: new URL("/history/", BASE_UI_URL),
      linkName: "Historique",
    },
    {
      icon: <HiOutlineCog8Tooth size={23} />,
      path: new URL("/settings/", BASE_UI_URL),
      linkName: "Paramètres",
    },
  ];
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
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
        </aside>
        {children}
      </body>
    </html>
  );
}
