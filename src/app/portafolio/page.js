import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import EmailSection from "../components/EmailSection";
import Footer from "../components/Footer";
import AchievementsSection from "../components/AchievementsSection";
import PortfolioSection from "../components/PortfolioSection";

export default function Porfolio() {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212]">
            <PortfolioSection />
            <Footer />
        </main>
    );
}
