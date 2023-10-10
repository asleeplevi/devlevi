import Head from "next/head";
import { withSSRTranslation } from "@/utils/withTranslation";
import { Card } from "@/components/Card";
import { Inter } from "next/font/google";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>devlevi</title>
        <meta name="description" content="devlevi portifolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={clsx("flex-1 flex", inter.className)}>
        <section className="flex flex-1 px-4 pt-10 md:pt-0 md:px-0 flex-col md:flex-row container gap-4 max-w-sm relative">
          <Card />
        </section>
      </main>
    </>
  );
}

export const getStaticProps = withSSRTranslation(["common"], async () => {
  return {
    props: {},
  };
});
