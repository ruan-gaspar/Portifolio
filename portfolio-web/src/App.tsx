import { useState } from "react";
import { AgroTech } from "./pages/Agrotech";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProjectGrid } from "./components/ProjectGrid";
import { Architecture } from "./components/Architecture";
import { Lab } from "./components/Lab";
import { Footer } from "./components/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState<
"home" | "agrotech"
>("home");
if (currentPage === "agrotech") {
  return (
    <AgroTech
      onBack={() => setCurrentPage("home")}
    />
  );
}  
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