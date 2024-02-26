import Link from "next/link";
import { ISideMenuLinkProps } from "./Link.type";

export default function SideMenuLink({
  path,
  icon,
  linkName,
}: ISideMenuLinkProps) {
  return (
    <>
      <span className="flex gap-2 cursor-pointer">
        {icon}
        <Link href={path}>{linkName}</Link>
      </span>
    </>
  );
}
