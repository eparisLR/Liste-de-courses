import Image from "next/image";
import styles from "./RecipeBanner.module.css";

export default function RecipeBanner() {
  return (
    <div
      className={`w-full ${styles["recipe_banner_bg"]} flex p-8 justify-between rounded-3xl text-white`}
    >
      <div>
        <h1 className="text-3xl font-bold">
          Choisissez, cuisinez, économisez !
        </h1>
        <p>
          Créez vos listes de courses personnalisées à partir de délicieuses
          recettes.
        </p>
      </div>
      <Image
        src="/images/illustration.png"
        alt="Marchand de courses"
        width={200}
        height={600}
      />
    </div>
  );
}
