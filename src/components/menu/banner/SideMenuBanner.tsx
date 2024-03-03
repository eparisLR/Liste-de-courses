import { ISideMenuBannerProps } from "./SideMenuBanner.type";
import styles from "./SideMenuBanner.module.css";

export default function SideMenuBanner({
  title,
  button,
}: ISideMenuBannerProps) {
  return (
    <div className={`flex flex-col p-8 ${styles.banner}`}>
      <p className="text-white font-bold">{title}</p>
      {button}
    </div>
  );
}
