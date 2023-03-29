import Image from "next/image";
const POSTS = [
  {
    id: 1,
    title: "Blue Marble",
    tags: ["Next.js", "Three.js"],
    image: "/project--bm-landing-page.jpg",
  },

  {
    id: 2,
    title: "Ignews",
    tags: ["Next.js", "Stripe", "Prismic"],
    image: "/project--ignews.jpg",
  },
];

export const ProjectsSections = () => {
  return (
    <div className="container max-w-3xl px-4">
      <h4 className="text-sm font-bold text-grey">Meus projetos</h4>
      <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-8">
        {POSTS.map((post) => (
          <li
            key={post.id}
            className="w-full h-[260px] bg-grey-500 rounded-lg relative overflow-hidden"
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
          </li>
        ))}
      </ul>
    </div>
  );
};
