import LogoSvg from "@/svg/logo";
import clsx from "clsx";
import { useTranslation } from "next-i18next";

const DEFAULT_LANGUAGES = ["en", "pt"];

export const Header = ({}: { activeLanguage: string }) => {
  const { i18n } = useTranslation();

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
            onClick={() => i18n.changeLanguage(lang)}
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>
    </header>
  );
};
