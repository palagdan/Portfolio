import {Timeline} from "@/components/ui/timeline.tsx";
import {education} from "@/constants";


const EducationSection = () => {
    return (
        <section id="education" className="max-w-5xl mx-auto px-8">
            <h2 className="text-2xl md:text-3xl text-white font-bold max-w-5xl mx-auto mt-20 md:mt-40 mb-10">Education</h2>
            <Timeline data={education} />
        </section>
    )
}

export default EducationSection;