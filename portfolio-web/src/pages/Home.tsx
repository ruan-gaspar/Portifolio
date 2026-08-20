import { Architecture } from "../components/Architecture";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Lab } from "../components/Lab";
import { Navbar } from "../components/Navbar";
import { ProjectGrid } from "../components/ProjectGrid";

export function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ProjectGrid />
        <Architecture />
        <Lab />
      </main>

      <Footer />
    </>
  );
}