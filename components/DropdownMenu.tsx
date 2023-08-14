"use client";
import clsx from "clsx";
import { usePathname } from "next-intl/client";

interface DropdownMenuProps {
  children: React.ReactNode;
  label: string;
  align?: "center" | "left" | "right";
  href?: string;
}

export default function DropdownMenu({
  children,
  label,
  align = "center",
  href = "#",
}: DropdownMenuProps) {
  const pathname = usePathname();
  const isActive = pathname !== "/" && href.includes(pathname);
  return (
    <div className="group relative rounded p-2" data-open={isActive}>
      <span
        className={clsx(
          "cursor-pointer rounded p-2 text-slate-500",
          isActive ? "text-[rgb(129,37,17)]" : "group-hover:text-slate-700",
          "group-data-[open=true]:text-[rgb(129,37,17)]"
        )}
      >
        {label}
      </span>
      <ul
        className={clsx(
          "absolute top-10 box-border hidden w-max flex-col gap-1 border-2 bg-white p-4 group-hover:flex lg:shadow-lg",
          align === "center" && "left-1/2 -translate-x-1/2",
          align === "left" && "lg:left-0",
          align === "right" && "lg:right-0"
        )}
      >
        {children}
      </ul>
    </div>
  );
}
