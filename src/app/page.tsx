import { Header } from "@/sections/Header";
import { Home } from "@/sections/Home";
import { About } from "@/sections/About";
import { TapeSection } from "@/sections/Tape";
import { Projects }   from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Main() {
  return (
    <>
      <Header />
      <main>
        <div id="Home" className="scroll-mt-20 min-h-screen">
          <Home />
        </div>
        <div id="About" className="scroll-mt-20 min-h-screen">
          <About />
        </div>
        <TapeSection />
        <div id="Projects" className="scroll-mt-20 min-h-screen">
          <Projects />
        </div>
        <div id="Experience" className="scroll-mt-20 min-h-screen">
          <Experience />
        </div>
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}