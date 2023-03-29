import { AboutModal } from "./components/About";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export default function About() {
  return (
    <main>
      <Header activeLanguage={"pt-br"} />
      <AboutModal />
      <Footer />
    </main>
  );
}
