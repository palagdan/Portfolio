import {BackgroundBeamsWithCollision} from "@/components/ui/background-beams-with-collision.tsx";

const HeroSection = () => {
    return (
        <div id="home" className="max-w-5xl mx-auto px-8">
            <BackgroundBeamsWithCollision>
                <span className="text-3xl relative z-20 lg:text-5xl font-bold text-center text-white font-sans tracking-tight">
                    I'm a{" "}
                    <span
                    className="bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 ">software engineer
                    </span>
                    {" "}who
                    loves writing code. Some say it's magic. I say it's just a bunch of{" "}
                    <span className="bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 ">
                         "if statements" and prayers
                    </span>
                </span>
            </BackgroundBeamsWithCollision>
        </div>
    );
};

export default HeroSection;
