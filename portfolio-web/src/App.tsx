import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProjectGrid } from "./components/ProjectGrid";
import { Architecture } from "./components/Architecture";
import { Lab } from "./components/Lab";
import { Footer } from "./components/Footer";

function App() {
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

export default App;