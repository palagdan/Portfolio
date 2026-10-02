import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import framer-motion
import { Link } from "react-scroll";
import {navLinks, resumeLink} from "@/constants";
import NavbarHover from "@/components/navbars/NavbarHover/NavbarHover.tsx";
import NavbarHoverItem from "@/components/navbars/NavbarHover/NavbarHoverItem.tsx";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import BorderMagicButton from "@/components/buttons/BorderMagicButton.tsx";
import SocialLinks from "@/components/navbars/SocialLinks.tsx";

const NavbarMenu = () => {
    const [toggle, setToggle] = useState(false);

    const overlayVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const iconVariants = {
        hidden: { rotate: 0, scale: 1 },
        active: { rotate: 45, scale: 1.2, transition: { type: "spring", stiffness: 300 } },
        inactive: { rotate: 0, scale: 1, transition: { type: "spring", stiffness: 300 } },
    };

    return (
        <div className="py-8 fixed top-0 left-0 w-full z-[100] px-4 sm:px-8">
            <div className="sm:flex w-full items-center justify-center gap-4 top-20 hidden">
                <NavbarHover>
                    <Link to="home" smooth={true} duration={500} className="flex items-center justify-between space-x-2 text-sm z-10 font-bold cursor-pointer">
                        <Avatar>
                            <AvatarImage src="avatar.jpg" />
                            <AvatarFallback>DP</AvatarFallback>
                        </Avatar>
                        <span className="text-white z-10">Daniil Palagin</span>
                    </Link>
                    {navLinks.map((item) => (
                        <NavbarHoverItem to={item.link} key={item.name}>
                            {item.name}
                        </NavbarHoverItem>
                    ))}
                </NavbarHover>
                <BorderMagicButton href={resumeLink} target="_blank" rel="noopener noreferrer">Resume</BorderMagicButton>
                <SocialLinks />
            </div>

            <div className="sm:hidden flex w-full items-center justify-between">
                <Link to="home" smooth={true} duration={500} className="flex items-center justify-between space-x-2 text-sm z-10 font-bold bg-tertiaryTmp p-3 rounded-full cursor-pointer">
                    <Avatar>
                        <AvatarImage src="avatar.jpg" />
                        <AvatarFallback>DP</AvatarFallback>
                    </Avatar>
                    <span className="text-white z-10 font-bold">Daniil Palagin</span>
                </Link>

                <motion.div
                    className="bg-tertiaryTmp p-3 rounded-full cursor-pointer"
                    onClick={() => setToggle(!toggle)}
                    initial="hidden"
                    animate={toggle ? "active" : "inactive"}
                    variants={iconVariants}
                >
                    <motion.img
                        src={toggle ? "cross.png" : "burger.png"}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain"
                    />
                </motion.div>
            </div>

            <AnimatePresence>
                {toggle && (
                    <motion.div
                        className="fixed top-0 left-0 w-full h-full bg-tertiaryTmp flex flex-col justify-center items-center z-[1000]"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={overlayVariants}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <motion.div className="absolute py-8 top-0 left-0 w-full px-4 sm:px-8">
                            <div className="flex justify-between items-center space-x-2 text-sm z-10 font-bold">
                                <Link to="home" smooth={true} duration={500} onClick={() => setToggle(false)} className="flex items-center justify-between space-x-2 text-sm font-bold cursor-pointer">
                                    <Avatar>
                                        <AvatarImage src="avatar.jpg" />
                                        <AvatarFallback>DP</AvatarFallback>
                                    </Avatar>
                                    <span className="text-white z-10 font-bold">Daniil Palagin</span>
                                </Link>
                                <div
                                    className="bg-tertiaryTmp p-2 rounded-full cursor-pointer"
                                    onClick={() => setToggle(false)}
                                >
                                    <img
                                        src="cancel.png"
                                        alt="close menu"
                                        className="w-[28px] h-[28px] object-contain"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {navLinks.map((item, index) => (
                            <motion.div
                                key={item.name}
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                transition={{ delay: index * 0.1, duration: 0.3 }}
                            >
                                <NavbarHoverItem
                                    to={item.link}
                                    onClick={() => setToggle(false)}
                                    className="text-white text-lg p-2"
                                >
                                    {item.name}
                                </NavbarHoverItem>
                            </motion.div>
                        ))}
                        <BorderMagicButton href={resumeLink} target="_blank" rel="noopener noreferrer">Resume</BorderMagicButton>
                        <div className="mt-6">
                            <SocialLinks onNavigate={() => setToggle(false)} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NavbarMenu;
