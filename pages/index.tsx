import RecipesList from "@/components/recipes-list";
import Head from "next/head";
import { useRouter } from "next/router"

const Home = () => {
    const router = useRouter();
    return(
        <>
            <Head>
                <title>Générateur de liste de courses</title>
                <meta name="descirption" content="Générateur de liste de courses"/>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
            </Head>
            <RecipesList/>
        </>
    )
}

export default Home;