import { Header } from "@/components/Header";
import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="min-h-screen  flex flex-col">
        <Header />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default appWithTranslation(App);
