import RecipesList from "../components/recipes-list";
import { RECIPE_TYPE } from "../modules/recipes/recipes.types";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  GiPumpkin,
  GiFlowerPot,
  GiCakeSlice,
  GiCuckooClock,
} from "react-icons/gi";
import { BsSnow2 } from "react-icons/bs";
import { PiSunHorizonDuotone } from "react-icons/pi";
import { FaCarrot, FaPlateWheat } from "react-icons/fa6";
import { LuUtensilsCrossed } from "react-icons/lu";
import CartButton from "../components/cart-button";

export default function Home() {
  const router = useRouter();

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
        <div className=" max-h-screen sticky top-0">
          <ul className="flex min-h-[100vh] h-full w-[13vw] flex-col justify-around p-12">
            <li className="flex w-100 text-blue-900">
              <LuUtensilsCrossed size="23" className="mr-2" />
              Toutes
            </li>
            {Object.values(RECIPE_TYPE).map((type, index) => (
              <li
                key={type + index.toString()}
                className={
                  "flex w-100 " +
                  (type === RECIPE_TYPE.ENTREE
                    ? "text-orange-300"
                    : type === RECIPE_TYPE.PLAT
                    ? "text-orange-200"
                    : "text-amber-700")
                }
              >
                {type === RECIPE_TYPE.DESSERT ? (
                  <GiCakeSlice size="23" className="mr-2" />
                ) : type === RECIPE_TYPE.ENTREE ? (
                  <FaCarrot size="23" className="mr-2" />
                ) : (
                  <FaPlateWheat size="23" className="mr-2" />
                )}
                {type[0].toUpperCase() + type.slice(1)}
              </li>
            ))}
            <li className="flex w-100 text-orange-500">
              <GiPumpkin size="23" className="mr-2" />
              Automne
            </li>
            <li className="flex w-100 text-cyan-300">
              <BsSnow2 size="23" className="mr-2" />
              Hiver
            </li>
            <li className="flex w-100 text-emerald-300">
              <GiFlowerPot size="23" className="mr-2" />
              Printemps
            </li>
            <li className="flex w-100 text-yellow-400">
              <PiSunHorizonDuotone size="23" className="mr-2" />
              Été
            </li>
            <li className="flex w-100 text-violet-800">
              <GiCuckooClock size="23" className="mr-2" />
              Rapide
            </li>
          </ul>
        </div>
        <div className="w-100 p-2">
          <RecipesList />
        </div>
      </main>
    </>
  );
}
