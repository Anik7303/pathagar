import createNextIntlMiddleware from "next-intl/middleware";

import { defaultLocale, locales } from "./locales";

export default createNextIntlMiddleware({
  locales,
  defaultLocale,
  localeDetection: false,
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
