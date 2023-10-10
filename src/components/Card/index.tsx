import Image from "next/image";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const RESUME_URL = {
  pt: "/levi-carvalho-curriculo.pdf",
  en: "/en/levi-carvalho-resume.pdf",
};

export const Card = () => {
  const { t, i18n } = useTranslation();

  const CURRRENT_LANGUAGE = (i18n.language as "pt") || "en";
  return (
    <div className="relative h-full w-full text-center">
      <div className="w-[130px] h-[130px] bg-[#93BEFF] absolute left-0 top-0 blur-3xl" />
      <div className="w-[130px] h-[130px] bg-[#7D40BA] opacity-60 absolute rounded-full right-0 bottom-0 blur-3xl" />
      <div className="flex justify-center items-center px-8 w-full h-[80vh] rounded-lg bg-[#F5F5F574] backdrop-blur-sm">
        <div className="flex flex-col gap-8 items-center">
          <div>
            <p>
              {t("hello")} 🖖🏻, {t("i-am-levi")}
            </p>
            <h1 className="text-5xl font-bold my-2">Fullstack Developer</h1>
            <p
              className="text-sm max-w-sm"
              dangerouslySetInnerHTML={{ __html: t("about-me") }}
            />
          </div>
          <ul className="flex items-center gap-8">
            <li>
              <Link
                href="https://linkedin.com/in/levi-me"
                target="_blank"
                className="block"
              >
                <Image
                  src="/linkedin.svg"
                  alt="linkedin icon"
                  width={24}
                  height={24}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/asleeplevi"
                target="_blank"
                className="block"
              >
                <Image
                  src="/github.svg"
                  alt="github icon"
                  width={24}
                  height={24}
                />
              </Link>
            </li>
            <li>
              <Link
                href="mailto:jlevicarvalho@gmail.com"
                target="_blank"
                className="block"
              >
                <Image
                  src="/email.svg"
                  alt="email icon"
                  width={24}
                  height={24}
                />
              </Link>
            </li>
            <li>
              <Link
                href={RESUME_URL[CURRRENT_LANGUAGE]}
                target="_blank"
                className="block"
              >
                <Image
                  src="/paper-icon.svg"
                  alt="email icon"
                  width={24}
                  height={24}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
