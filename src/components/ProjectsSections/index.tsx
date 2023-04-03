import GithubSvg from "@/svg/github";
import LinkSvg from "@/svg/link";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
const POSTS = [
  {
    id: 1,
    title: "Blue Marble",
    tags: ["Next.js", "Three.js"],
    image: "/project--bm-landing-page.jpg",
    preview: "https://bluemarble.com.br",
  },

  {
    id: 2,
    title: "Ignews",
    tags: ["Next.js", "Stripe", "Prismic"],
    image: "/project--ignews.jpg",
    github: "https://github.com/asleeplevi/ignews",
    preview: "https://ignews-two-rouge.vercel.app/",
  },
];

export const ProjectsSections = () => {
  const { t } = useTranslation();

  return (
    <div className="container max-w-3xl px-4 mt-40 relative">
      <h4 className="text-sm font-bold text-grey">{t("projects")}</h4>
      <ul className=" mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-8">
        {POSTS.map((post) => (
          <li
            key={post.id}
            className="group w-full h-[260px] bg-grey-500 rounded-lg relative overflow-hidden"
          >
            <Image
              src={post.image}
              fill
              className="object-cover"
              alt={`Project image of ${post.title}`}
            />
            <footer className="w-full h-[156px] absolute bottom-0 bg-[linear-gradient(to_top,rgba(0,0,0,.9),rgba(0,0,0,0))] flex flex-col justify-end px-3 pb-3">
              <h5 className="mb-2  text-lg font-bold">{post.title}</h5>
              <ul className="flex gap-2">
                {post.tags.map((tag) => (
                  <li
                    key={tag}
                    className="text-2xs border border-grey rounded-full px-2 py-0.5"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </footer>

            <div className="flex opacity-0 transition-all group-hover:opacity-100 absolute w-full h-full bg-black/50  justify-center items-center gap-2">
              {post.github && (
                <Link
                  href={post.github}
                  target="_blank"
                  className="transition-all bg-white/20 hover:bg-primary rounded-full flex items-center justify-center w-[45px] h-[45px] group/link"
                >
                  <GithubSvg
                    width={25}
                    height={25}
                    className="transition-all group-hover/link:scale-110 relative -left-[1px]"
                  />
                </Link>
              )}
              {post.preview && (
                <Link
                  href={post.preview}
                  target="_blank"
                  className="transition-all bg-white/20 hover:bg-primary rounded-full flex items-center justify-center w-[45px] h-[45px] rotate-45 group/link"
                >
                  <LinkSvg
                    width={25}
                    height={25}
                    className="transition-all group-hover/link:scale-110"
                  />
                </Link>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
