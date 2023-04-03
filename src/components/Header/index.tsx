import LogoSvg from "@/svg/logo";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const DEFAULT_LANGUAGES = ["en", "pt"];

export const Header = () => {
  const { i18n } = useTranslation();

  const router = useRouter();
  const onChangeLang = (lang: string) => {
    router.push(router.route, router.route, { locale: lang });
  };

  return (
    <header className="w-full flex justify-between items-center container px-4 py-8 max-w-3xl relative">
      <LogoSvg stroke="white" className="w-5" />
      <div className="flex items-center gap-4">
        <div className="h-3 w-[1px] bg-white" />
        {DEFAULT_LANGUAGES.map((lang) => (
          <button
            key={lang}
            className={clsx("text-sm text-grey", {
              "text-white": i18n.language === lang,
            })}
            onClick={() => onChangeLang(lang)}
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>
    </header>
  );
};
