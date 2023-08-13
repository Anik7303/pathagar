import { getRequestConfig } from "next-intl/server";

import { defaultLocale } from "./locales";

const dictionaries: { [key: string]: () => Promise<any> } = {
  bn: () => import("@/dictionaries/bn.json").then((m) => m.default),
  en: () => import("@/dictionaries/en.json").then((m) => m.default),
};

async function getDictionary(locale: string) {
  const dictionary = dictionaries[locale] || dictionaries[defaultLocale];
  return dictionary();
}

export default getRequestConfig(async ({ locale }) => ({
  messages: await getDictionary(locale),
}));
