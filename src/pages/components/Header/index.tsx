import LogoSvg from "@/pages/svg/logo";
import clsx from "clsx";

export const Header = ({ activeLanguage }: { activeLanguage: string }) => {
  return (
    <header className="w-full flex justify-between items-center container px-4 py-8 max-w-3xl">
      <LogoSvg stroke="white" className="w-5" />
      <div className="flex items-center gap-4">
        <div className="h-3 w-[1px] bg-white" />
        <button
          className={clsx("text-sm text-grey", {
            "text-white": activeLanguage === "en-us",
          })}
        >
          EN
        </button>
        <button
          className={clsx("text-sm text-grey", {
            "text-white": activeLanguage === "pt-br",
          })}
        >
          PT
        </button>
      </div>
    </header>
  );
};
