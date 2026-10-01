import {Timeline} from "@/components/ui/timeline.tsx";
import {experience} from "@/constants";


const ExperienceSection = () => {
    return (
        <section id="experience" className="max-w-5xl mx-auto px-8">
            <h1 className="text-2xl md:text-3xl text-white font-bold max-w-5xl mx-auto mt-20 md:mt-40 mb-10">Work
                Experience</h1>
            <Timeline  data={experience} />
        </section>
    )
}

export default ExperienceSection;

