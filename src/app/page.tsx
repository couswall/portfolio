import Introduction from "@components/Introduction/Introduction";
import SkillsCarousel from "@components/SkillsCarousel/SkillsCarousel";
import About from "@components/About/About";
import Projects from "@components/Projects/Projects";
import Stack from "@components/Stack/Stack";
import Experience from "@components/Experience/Experience";
import Contact from "@components/Contact/Contact";
import Footer from "@components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Introduction />
      {/* <SkillsCarousel /> */}
      {/* <About /> */}
      <Stack />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
