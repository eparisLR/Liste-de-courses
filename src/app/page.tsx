import RecipesList from "../components/recipes/list";
import Head from "next/head";
import CartButton from "../components/cart/button";
import SideMenuLinkList from "../components/menu/link-list/LinkList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Générateur de liste de courses</title>
        <meta name="descirption" content="Générateur de liste de courses" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className="flex">
        <CartButton />
      </header>
      <main className="flex container w-full">
        <div className="w-20 h-20">
          <SideMenuLinkList />
        </div>
        <div className="w-full p-2">
          <RecipesList />
        </div>
      </main>
    </>
  );
}
