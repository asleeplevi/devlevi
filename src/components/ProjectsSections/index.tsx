import GithubSvg from "@/svg/github";
import LinkSvg from "@/svg/link";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import PageSvg from "@/svg/page";
import LanSvg from "@/svg/lan";
import { useState } from "react";
import clsx from "clsx";

type Posts = {
  id: number;
  title: string;
  tags: string[];
  image: string;
  preview?: string;
  github?: string;
  filters: string[]
};

type ProjectsSectionsProps = {
  posts: Posts[];
};

export const ProjectsSections = ({ posts }: ProjectsSectionsProps) => {
  const { t } = useTranslation();
  const [search, setSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState('')

  const filteredPosts = posts.filter(post => {
    let satisfiesFilters = true
    let satisfiesSearch = true
    if (activeFilter) satisfiesFilters = post.filters?.includes(activeFilter)
    if (search) satisfiesSearch = post.title.toLowerCase().includes(search.toLowerCase())

    return satisfiesFilters && satisfiesSearch

  })
  return (
    <div className="px-4">
      <div className="flex justify-center">
        <input
          value={search}
          onChange={({ target }) => setSearch(target.value)}
          placeholder="Type to search"
          className="focus:outline-primary outline-none max-w-lg bg-gray-800 w-full rounded border-none h-8 pl-4 mt-4" />
      </div>
      <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-8 h-[60vh] overflow-y-scroll px-4">
        {filteredPosts.map((post) => (
          <li
            key={post.id}
            className="group w-full h-[300px] lg:h-[250px] bg-grey-500 rounded-lg relative overflow-hidden"
          >
            <Image
              src={post.image}
              fill
              className="object-cover"
              alt={`Project image of ${post.title}`}
            />
            <footer className="w-full h-[156px] absolute bottom-0 bg-[linear-gradient(to_top,rgba(0,0,0,.9),rgba(0,0,0,0))] flex flex-col justify-end px-3 pb-3">
              <h5 className="mb-2  text-lg font-bold">{post.title}</h5>
              <ul className="flex gap-2 flex-wrap">
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
      <ul className="flex justify-center gap-8 mt-8 text-gray-600">
        <li >
          <button
            onClick={() => setActiveFilter('frontend')}
            className={clsx("flex flex-col items-center gap-1 cursor-pointer",
              {
                "text-white": activeFilter === 'frontend'
              }
            )}
          >
            <PageSvg
              className={
                clsx("w-6 h-6", {
                  "fill-white": activeFilter === 'frontend',
                  "fill-gray-600": activeFilter !== 'frontend'
                })
              }
            />
            Frontend
          </button>
        </li>
        <li >
          <button
            onClick={() => setActiveFilter('backend')}
            className={clsx("flex flex-col items-center gap-1 cursor-pointer",
              {
                "text-white": activeFilter === 'backend',
              }
            )}
          >
            <LanSvg
              className={
                clsx("w-6 h-6 ", {
                  "fill-white": activeFilter === 'backend',
                  "fill-gray-600": activeFilter !== 'backend'
                })
              }
            />
            Backend
          </button>
        </li>
      </ul>
    </div >
  );
};
