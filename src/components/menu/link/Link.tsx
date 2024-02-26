import Link from "next/link";
import { ISideMenuLinkProps } from "./Link.type";

export default function SideMenuLink({ path, icon }: ISideMenuLinkProps) {
  return (
    <span className="flex">
      {icon}
      <Link href={path} />
    </span>
  );
}
