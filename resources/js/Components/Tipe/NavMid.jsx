import React from "react";
import { useState } from "react";

const NavMid = () => {
    const [active, setActive] = useState("");
    const [hovered, setHovered] = useState("");
    const activeClass = "text-primary-custom font-bold";

    const handleHover = (link) => {
        setHovered(link);
    };

    const clearHover = () => {
        setHovered("");
    };

    const renderIcon = (link) => {
        if (active === link || hovered === link) {
            return <i className="fas fa-circle text-sm"></i>;
        }
        return null;
    };

    const handleClick = (link) => {
        setActive(link);
        scrollToSection(link);
    };

    const scrollToSection = (sectionId) => {
        let element = document.getElementById(sectionId);
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });
    };

    return (
        <div className="lg:w-full md:w-full lg:px-36 md:px-16 px-4 w-full overflow-x-auto  my-3  bg-white sticky top-[8%] md:top-[6%] lg:top-[9%]">
            <ul className="md:gap-10 gap-5 justify-start lg:justify-start flex text-primary-custom text-opacity-30 h-12 items-end">
                <li>
                    <div
                        className={`flex flex-col items-center cursor-pointer text-lg hover:text-primary-custom font-medium ${
                            active === "gallery" ? activeClass : ""
                        }`}
                        onClick={() => {
                            handleClick("gallery");
                            scrollToSection("gallery");
                        }}
                        onMouseEnter={() => handleHover("gallery")}
                        onMouseLeave={clearHover}
                    >
                        {renderIcon("gallery")}
                        <h1>Gallery</h1>
                    </div>
                </li>
                <li>
                    <div
                        className={`flex flex-col items-center cursor-pointer text-lg  hover:text-primary-custom font-medium ${
                            active === "spesifikasi" ? activeClass : ""
                        }}`}
                        onClick={() => {
                            handleClick("spesifikasi");
                            scrollToSection("spesifikasi");
                        }}
                        onMouseEnter={() => handleHover("spesifikasi")}
                        onMouseLeave={clearHover}
                    >
                        {renderIcon("spesifikasi")}
                        <h1>Spesifikasi</h1>
                    </div>
                </li>

                <li className="w-auto">
                    <div
                        className={`flex  flex-col items-center cursor-pointer text-lg  hover:text-primary-custom font-medium ${
                            active === "fasilitas" ? activeClass : ""
                        }`}
                        onClick={() => {
                            handleClick("fasilitas");
                            scrollToSection("fasilitas");
                        }}
                        onMouseEnter={() => handleHover("fasilitas")}
                        onMouseLeave={clearHover}
                    >
                        {renderIcon("fasilitas")}
                        <h1 className="flex text-nowrap">
                            Fasilitas <span>&nbsp;&amp;&nbsp;</span> <span> Akses</span>
                        </h1>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default NavMid;
