import { ISideMenuBannerProps } from "./SideMenuBanner.type";
import styles from "./SideMenuBanner.module.css";

export default function SideMenuBanner({
  title,
  button,
}: ISideMenuBannerProps) {
  return (
    <div
      className={`mx-8 flex flex-col justify-between items-start p-8 rounded-3xl ${styles.banner}`}
      data-cy="sidemenu-banner"
    >
      <p className="text-white font-bold mb-2">{title}</p>
      {button}
    </div>
  );
}
