import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="flex bg-main mb-16">
      <ul className="mx-auto flex items-center gap-8">
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
            <Image
              src="/github.svg"
              alt="linkedin icon"
              width={24}
              height={24}
            />
          </Link>
        </li>
        <li>
          <Link href="mailto:contato@devlevi.com" target="_blank">
            <Image
              src="/email.svg"
              alt="linkedin icon"
              width={24}
              height={24}
            />
          </Link>
        </li>
      </ul>
    </footer>
  );
};
