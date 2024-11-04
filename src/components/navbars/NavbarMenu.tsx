import {navLinks} from "@/constants";
import NavbarHover from "@/components/navbars/NavbarHover/NavbarHover.tsx";
import NavbarHoverItem from "@/components/navbars/NavbarHover/NavbarHoverItem.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "../ui/avatar";
import BorderMagicButton from "@/components/buttons/BorderMagicButton.tsx";
import {useState} from "react";

const NavbarMenu = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="py-8 fixed top-0 left-0 w-full z-[100] px-4 sm:px-8">
            <div className="sm:flex w-full items-center justify-center gap-4 top-20 hidden">
                <NavbarHover>
                    <div className="flex items-center justify-between space-x-2 text-sm z-10 font-bold">
                        <Avatar>
                            <AvatarImage src="avatar.jpg"/>
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span className="text-white z-10">Daniil Palagin</span>
                    </div>
                    {navLinks.map(item => (
                        <NavbarHoverItem to={item.link} key={item.name}>
                            {item.name}
                        </NavbarHoverItem>
                    ))}
                </NavbarHover>
                <BorderMagicButton>
                    Resume
                </BorderMagicButton>
            </div>
            <div className="sm:hidden flex w-full items-center justify-between">
                <div
                    className="flex items-center justify-between space-x-2 text-sm z-10 font-bold bg-tertiaryTmp p-3 rounded-full  cursor-pointer">
                    <Avatar>
                        <AvatarImage src="avatar.jpg"/>
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span className="text-white z-10 font-bold">Daniil Palagin</span>
                </div>


                <div className="bg-tertiaryTmp p-3 rounded-full transition-colors cursor-pointer">
                    <img
                        src={toggle ? "cross.png" : "burger.png"}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain"
                        onClick={() => setToggle(!toggle)}
                    />
                </div>
            </div>

            {toggle && (
                <div className="fixed top-0 left-0 w-full h-full bg-tertiaryTmp flex flex-col justify-center  items-center z-[1000]">
                    <div className="absolute py-8 top-0 left-0 w-full px-4 sm:px-8">
                        <div className="flex justify-between items-center space-x-2 text-sm z-10 font-bold">
                            <div
                                className="flex items-center justify-between space-x-2 text-sm font-bold">
                                <Avatar>
                                    <AvatarImage src="avatar.jpg"/>
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <span className="text-white z-10 font-bold">Daniil Palagin</span>
                            </div>
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
                    </div>
                    {navLinks.map(item => (
                        <NavbarHoverItem to={item.link} key={item.name} onClick={ () => setToggle(false) } className="text-white text-lg p-2">
                            {item.name}
                        </NavbarHoverItem>
                    ))}
                    <BorderMagicButton>Resume</BorderMagicButton>
                </div>
            )}
        </div>
    );
};

export default NavbarMenu;

