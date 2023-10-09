import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="flex py-4 items-center relative">
      <ul className="m-auto flex items-center gap-8">
        <li>
          <Link href="https://linkedin.com/in/levi-me" target="_blank">
            <Image
              src="/linkedin.svg"
              alt="linkedin icon"
              width={24}
              height={24}
            />
          </Link>
        </li>
        <li>
          <Link href="https://github.com/asleeplevi" target="_blank">
            <Image src="/github.svg" alt="github icon" width={24} height={24} />
          </Link>
        </li>
        <li>
          <Link href="mailto:jlevicarvalho@gmail.com" target="_blank">
            <Image src="/email.svg" alt="email icon" width={24} height={24} />
          </Link>
        </li>
      </ul>
    </footer>
  );
};
