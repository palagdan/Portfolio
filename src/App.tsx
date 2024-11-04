import HeroSection from "@/sections/HeroSection/HeroSection.tsx";
import NavbarMenu from "@/components/navbars/NavbarMenu.tsx";
import ExperienceSection from "@/sections/ExpierenceSection/ExperienceSection.tsx";
import ProjectsSection from "@/sections/ProjectsSection/ProjectsSection.tsx";

function App() {

    return (
        <div className="relative z-0 bg-primaryTmp">
            <NavbarMenu/>
            <div className='bg-hero-pattern bg-cover h-screen flex flex-col'>
                <HeroSection/>
            </div>
                <ExperienceSection/>
                <ProjectsSection/>
        </div>
    )
}

export default App
