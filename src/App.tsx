import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import EducationPage from "./pages/EducationPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

import LoanGenius from "./pages/ProjectDetails/LoanGenius";
import AyuboDrive from "./pages/ProjectDetails/AyuboDrive";
import Arogya from "./pages/ProjectDetails/Arogya";
import DentalCare from "./pages/ProjectDetails/DentalCare";
import MobileShop from "./pages/ProjectDetails/MobileShop";
import UnicGoldHouse from "./pages/ProjectDetails/UnicGoldHouse";


function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/skills" element={<SkillsPage />} />

        <Route path="/projects" element={<ProjectsPage />} />

        <Route path="/education" element={<EducationPage />} />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="/projects/loangenius" element={<LoanGenius />} />
        <Route path="/projects/ayubo-drive" element={<AyuboDrive />} />
        <Route path="/projects/arogya"  element={<Arogya />} />
        <Route path="/projects/dental-care" element={<DentalCare />} />
        <Route path="/projects/mobile-shop" element={<MobileShop />} /> 
        <Route path="/projects/unic-gold-house" element={<UnicGoldHouse />} /> 

      </Routes>

      <Footer />


    </BrowserRouter>

  )
}

export default App;