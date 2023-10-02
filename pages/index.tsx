import RecipesList from "@/components/recipes-list";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Générateur de liste de courses</title>
        <meta name="descirption" content="Générateur de liste de courses" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Link href="/recipes">Ajout d&apos;une recette</Link>
      <RecipesList />
    </>
  );
}
