import Image from "next/image";
import { useTranslation } from "next-i18next";
import ProjectsSvg from "@/svg/projects";
import PersonSvg from "@/svg/person";

export const Card = () => {
  const { t } = useTranslation();
  return (
    <div className="relative md:h-fit h-full w-full">
      <div className="w-[130px] h-[130px] bg-[#5840BA] opacity-60 absolute left-0 top-0 blur-3xl" />
      <div className="w-[130px] h-[130px] bg-[#5840BA] opacity-60 absolute rounded-full right-0 bottom-0 blur-3xl" />
      <div className="flex flex-col-reverse justify-end md:flex-row md:justify-between items-center gap-10 md:gap-0  px-8 pt-10 md:pt-0 w-full h-[80vh] md:h-[350px] border border-[#242424] rounded-lg bg-[linear-gradient(to_top,rgba(15,14,17,.3),rgba(15,14,17,.1))] backdrop-blur-sm">
        <div>
          <div>
            <p>{t("hello")} 🖖🏻</p>
            <h1 className="text-4xl font-bold my-1">{t("i-am")} Levi</h1>
            <p
              className="text-sm max-w-sm"
              dangerouslySetInnerHTML={{ __html: t("about-me") }}
            />
          </div>
          <div className="flex my-8 gap-2">
            <button className="w-full md:w-auto px-4 py-2 border border-gray-100 rounded flex gap-2 items-center hover:border-gray-100 hover:bg-gray-100 hover:text-black group transition-all">
              <PersonSvg className="fill-gray-100 group-hover:fill-black" />
              {t("my-resume")}
            </button>
            <button className="w-full md:w-auto px-4 py-2 border border-gray-100 rounded flex gap-2 items-center hover:border-gray-100 hover:bg-gray-100 hover:text-black group transition-all">
              <ProjectsSvg className="fill-gray-100 group-hover:fill-black" />
              {t("projects")}
            </button>
          </div>
        </div>
        <div className="overflow-hidden rounded-full min-w-[180px] min-h-[180px] md:min-h-[250px] md:min-w-[250px] relative border border-[#242424]">
          <Image
            src="/profile.png"
            alt="Profile photo"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};
