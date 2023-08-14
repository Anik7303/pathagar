"use client";
import clsx from "clsx";
import { usePathname } from "next-intl/client";
import Link from "next-intl/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={clsx(
        "inline-block w-full rounded p-2 text-slate-500",
        isActive ? "text-[rgb(129,37,17)]" : "hover:text-slate-700"
      )}
    >
      {children}
    </Link>
  );
}
