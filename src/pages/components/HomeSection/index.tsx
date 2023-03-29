import Image from "next/image";
import BorderSvg from "@/pages/svg/border";
import ArrowRightSvg from "@/pages/svg/arrowRight";
import Link from "next/link";

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
    title: "meu currículo",
    url: "resume",
  },
];

export const HomeSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center container px-4 mt-20 gap-4 max-w-3xl relative">
      <div>
        <span className="max-w-sm">Olá 🖖</span>
        <h1 className="text-5xl font-bold my-1">
          Eu sou <span className="text-primary">Levi</span>
        </h1>
        <p className="text-sm ">
          Um desenvolvedor fullstack apaixonado pelo universo do Javascript, que
          adora criar soluções <b>inovadoras</b> que atendam aos seus propósitos
          com <b>excelência</b>.
        </p>
        <button className="mt-8 flex items-center gap-2">
          Saiba mais sobre mim <ArrowRightSvg />{" "}
        </button>
      </div>
      <div className="w-full p-4 rounded-lg mt-8 relative backdrop-blur-md overflow-hidden">
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
                  <Image
                    src="/link.svg"
                    alt="linkedin icon"
                    width={16}
                    height={16}
                    className="fill-red"
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
