import Image from "next/image";
import BorderSvg from "@/svg/border";
import ArrowRightSvg from "@/svg/arrowRight";
import Link from "next/link";
import LinkSvg from "@/svg/link";
import { MouseEvent, useRef, useState } from "react";
import { useTranslation } from "next-i18next";

export const HomeSection = () => {
  const { t } = useTranslation();

  const [{ x, y }, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const LINKS = [
    {
      icon: "/linkedin.svg",
      title: "linkedin/in/levi-me",
      url: "https://linkedin.com/in/levi-me",
    },
    {
      icon: "/github.svg",
      title: "github.com/asleeplevi",
      url: "https://github.com/asleeplevi",
    },
    {
      icon: "/email.svg",
      title: "contato@devlevi.com",
      url: "mailto:contato@devlevi.com",
    },
    {
      icon: "/resume.svg",
      title: t("my-resume"),
      url: "resume",
    },
  ];

  function onMouseMove(event: MouseEvent) {
    const cardDetails = cardRef.current?.getBoundingClientRect()!;
    const cardX = cardDetails?.x || 0;
    const cardY = cardDetails?.y || 0;
    const offsetX = event.clientX - cardX;
    const offsetY = event.clientY - cardY;

    const round = (num: number) => Math.round(num * 100) / 100;

    const x = round((offsetX - cardDetails.width / 2) / 3 / 3);
    const y = round(-(offsetY - cardDetails.height / 2) / 3 / 3);

    setMousePosition({ x, y });
  }

  return (
    <div className="flex flex-col md:flex-row items-center container px-4 mt-20 gap-4 max-w-3xl relative">
      <div className="max-w-sm">
        <span className="max-w-sm">{t("hello")} 🖖</span>
        <h1 className="text-5xl font-bold my-1">
          {t("i-am")} <span className="text-primary">Levi</span>
        </h1>
        <p className="text-sm ">
          <span dangerouslySetInnerHTML={{ __html: t("about-me") }} />
        </p>
        <Link
          href="/about"
          className="mt-8 flex items-center gap-2 text-primary font-bold text-sm"
        >
          {t("more-about-me")}
          <ArrowRightSvg fill="#5840BA" />
        </Link>
      </div>
      <div
        className="w-full p-4 rounded-lg mt-8 relative backdrop-blur-md overflow-hidden"
        onMouseMove={onMouseMove}
        onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
        style={{
          transition: x !== 0 ? "all 0ms ease" : "all 2s ease",
          transform: `rotateX(calc(${x} * 1deg)) rotateY(calc(${y} * 1deg))`,
        }}
        ref={cardRef}
      >
        <div className=" w-full opacity-10 left-0 top-0 h-full absolute bg-[linear-gradient(to_right,rgba(0,0,0,.4),rgba(0,0,0,.4)),url(/noise.svg)]" />
        <BorderSvg className="absolute top-0 left-0 w-full h-full" />
        <ul className="flex flex-col gap-6 text-grey text-sm relative">
          {LINKS.map((link) => (
            <li
              key={link.url}
              className="flex gap-4 items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={link.icon}
                  alt="linkedin icon"
                  width={20}
                  height={20}
                />
                <p>{link.title}</p>
              </div>
              <div className="flex items-center gap-4">
                <button>
                  <Image
                    src="/copy.svg"
                    alt="linkedin icon"
                    width={16}
                    height={16}
                  />
                </button>
                <Link href={link.url} target="_blank">
                  <LinkSvg
                    width={16}
                    height={16}
                    fill="#7A787A"
                    className="rotate-45"
                  />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
