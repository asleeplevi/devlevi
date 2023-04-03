import LogoSvg from "@/svg/logo";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useState } from "react";

const DEFAULT_LANGUAGES = ["en", "pt"];

export const Header = () => {
  const [index, setIndex] = useState(0);
  const { i18n } = useTranslation();

  const router = useRouter();
  const onChangeLang = (lang: string) => {
    router.push(router.route, router.route, { locale: lang });
    setIndex(DEFAULT_LANGUAGES.findIndex((l) => l === lang));
  };

  return (
    <header className="w-full flex justify-between items-center container px-4 py-8 max-w-3xl relative">
      <LogoSvg stroke="white" className="w-5" />
      <div className="flex items-center gap-4 relative">
        <div
          className="w-7 h-6 absolute bg-white/20 transition-all ease-spring rounded -translate-x-[4px]"
          style={{ left: 20 * index + 16 * index }}
        />
        {DEFAULT_LANGUAGES.map((lang) => (
          <button
            key={lang}
            className={clsx(
              "w-5 h-5 text-sm text-grey outline-custom rounded-sm",
              {
                "text-white": i18n.language === lang,
              }
            )}
            onClick={() => onChangeLang(lang)}
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>
    </header>
  );
};
