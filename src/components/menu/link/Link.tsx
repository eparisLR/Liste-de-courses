import Link from "next/link";
import { ISideMenuLinkProps } from "./Link.type";

export default function SideMenuLink({
  path,
  icon,
  linkName,
}: ISideMenuLinkProps) {
  return (
    <>
      <li
        className="flex gap-2 cursor-pointer font-sans px-4 py-6 text-gray"
        data-cy="link"
      >
        {icon}
        <Link href={path}>{linkName}</Link>
      </li>
    </>
  );
}
