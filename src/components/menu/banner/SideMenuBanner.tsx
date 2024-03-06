import { ISideMenuBannerProps } from "./SideMenuBanner.type";
import styles from "./SideMenuBanner.module.css";

export default function SideMenuBanner({
  title,
  button,
}: ISideMenuBannerProps) {
  return (
    <div
      className={`mx-10 flex flex-col items-start p-4 ${styles.banner}`}
      data-cy="sidemenu-banner"
    >
      <p className="text-white font-bold mb-2">{title}</p>
      {button}
    </div>
  );
}
