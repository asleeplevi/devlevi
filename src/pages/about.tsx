import { AboutModal } from "./components/About";
import { Background } from "./components/Background";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export default function About() {
  return (
    <main>
      <Background />
      <Header activeLanguage={"pt-br"} />
      <AboutModal />
      <Footer />
    </main>
  );
}
