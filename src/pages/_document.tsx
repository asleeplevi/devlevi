import { Html, Head, Main, NextScript } from "next/document";
import { Background } from "@/components/Background";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-main h-screen text-white">
        <Background />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
