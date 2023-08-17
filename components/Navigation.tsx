import { useTranslations } from "next-intl";

import logo from "@/assets/logo.svg";
import Brand from "./Brand";
import DropdownItem from "./DropdownItem";
import DropdownMenu from "./DropdownMenu";
import NavLink from "./NavLink";

const links = [
  { href: "/", label: "home" },
  { href: "/institute", label: "institute" },
  {
    index: true,
    href: "/founding_peroid",
    label: "founding_period.index",
    children: [
      {
        href: "/founding_period/history",
        label: "founding_period.history",
      },
      {
        href: "/founding_period/founders",
        label: "founding_period.founders",
      },
    ],
  },
  { href: "/objective", label: "objective" },
  {
    index: true,
    href: "/administration",
    label: "administration.index",
    children: [
      {
        href: "/administration/board_of_directors",
        label: "administration.board_of_directors",
      },
      {
        href: "/administration/executive_council",
        label: "administration.executive_council",
      },
      {
        href: "/administration/student_member",
        label: "administration.student_member",
      },
      {
        href: "/administration/general_member",
        label: "administration.general_member",
      },
      {
        href: "/administration/lifetime_member",
        label: "administration.lifetime_member",
      },
    ],
  },
  { href: "/publication", label: "publication" },
  { href: "/award", label: "award" },
  { href: "/scholarship", label: "scholarship" },
  {
    index: true,
    href: "/gallery",
    label: "gallery.index",
    children: [
      { href: "/gallery/image", label: "gallery.image" },
      { href: "/gallery/video", label: "gallery.video" },
    ],
  },
  { href: "/book_search", label: "book_search", variant: "primary" },
];

export default function Navigation() {
  const t = useTranslations("links");

  return (
    <nav className="sticky top-0 z-10 flex flex-col flex-wrap items-center justify-between bg-white px-2 py-3 backdrop-blur lg:flex-row lg:px-4">
      <Brand src={logo} href="/" label={t("brand")} />
      <div className="hidden flex-col items-center gap-1 lg:flex lg:flex-row">
        {links.map((link) => {
          if (link.index) {
            return (
              <DropdownMenu
                key={link.label}
                // @ts-ignore
                label={t(link.label)}
                href={link.href}
              >
                {link.children.map((item) => (
                  <DropdownItem key={item.label}>
                    {/* @ts-ignore */}
                    <NavLink href={item.href}>{t(item.label)}</NavLink>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            );
          }
          return (
            <NavLink key={link.label} href={link.href} variant={link.variant}>
              {/* @ts-ignore */}
              {t(link.label)}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
