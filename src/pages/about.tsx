import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import ArrowRightSvg from "@/svg/arrowRight";
import { withSSRTranslation } from "@/utils/withTranslation";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <main>
      <Header activeLanguage={"pt-br"} />

      <div className="w-full max-w-3xl mx-auto relative">
        <section className="article w-full h-full bg-main border border-grey rounded-lg p-8 mb-8">
          <header className="mb-2">
            <Link
              href="/"
              className="transition-all group hover:-left-2 left-0  relative flex items-center gap-1.5 w-fit"
            >
              <ArrowRightSvg className=" rotate-180 " />
              <p className="transition-all group-hover:opacity-100 opacity-0 text-sm">
                {t("go-back")}
              </p>
            </Link>
          </header>
          <div dangerouslySetInnerHTML={{ __html: t("about") }} />
        </section>
      </div>
      <Footer />
    </main>
  );
}

export const getStaticProps = withSSRTranslation(["common"]);
