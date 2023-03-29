import Head from "next/head";
import Image from "next/image";

import { Header } from "@/components/Header";
import BorderSvg from "@/svg/border";
import { HomeSection } from "@/components/HomeSection";
import Link from "next/link";
import { ProjectsSections } from "@/components/ProjectsSections";
import { Footer } from "@/components/Footer";

import { useState } from "react";
// import Image from "next/image";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [activeLanguage, setActiveLanguage] = useState("pt-br");
  return (
    <>
      <Head>
        <title>devlevi</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <Background /> */}
      <main>
        {/* <Background /> */}
        <Header activeLanguage={activeLanguage} />
        <section className="relative">
        <section className="relative">
          <HomeSection />
        </section>
        <section className="bg-main pb-60">
          <ProjectsSections />
        </section>
        <Footer />
      </main>
    </>
  );
}
