import {HoverEffect} from "@/components/ui/card-hover-effect.tsx";
import {projects} from "@/constants";


const ProjectsSection = () => {
    return (
        <section id="projects" className="max-w-5xl mx-auto px-8">
            <h1 className="text-2xl md:text-3xl text-white font-bold max-w-5xl mx-auto mt-20 md:mt-40">
                Projects
            </h1>
            <HoverEffect items={projects}/>
        </section>
    )
}

export default ProjectsSection;