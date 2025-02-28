import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Qualification from "@/components/Qualification";
import Research from "@/components/Research";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Qualification />
      <Research />
      <Contact />
      <Footer />
    </main>
  );
}
