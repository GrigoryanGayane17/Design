import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import ChangeLanguage from "../components/ChangeLanguage.jsx";

export default function Projects() {
    const {t} = useTranslation();
    const [val, setVal] = useState("All projects");
    const Projects = t("projects", {returnObjects: true}) || [];
    const ProjectsTitle = t("projectsTitle", {returnObjects: true}) || [];

    const buttons = [
        "All projects",
        "Branding",
        "Web design",
        "App design",
        "Web app",
        "Dashboard",
    ];

    const filteredProjects =
        val === "All projects"
            ? Projects
            : Projects.filter((item) => item.idTitle === val);

    return (
        <div className="p-[50px]">
            <h1 className="mt-5 mb-5 text-[50px] sm:text-[70px] md:text-[100px] lg:text-[90px] leading-[70px] sm:leading-[30px] md:leading-[100px] lg:leading-[150px] font-bold animate-fadeInUp max-450:text-center">
                {ProjectsTitle}
            </h1>

            <div data-aos="fade-up" className="flex flex-wrap mt-5 max-450:justify-center">
                {buttons.map((text, index) => (
                    <button
                        key={index}
                        onClick={() => setVal(text)}
                        className={`p-[15px] max-450:p-[6px] border-2 mr-5  mb-5 font-medium transition-all duration-300 ease-in-out rounded 
                        ${val === text
                            ? "bg-black text-white border-black"
                            : "border-gray-200 hover:bg-black hover:text-white"
                        }`}
                    >
                        {text}
                    </button>
                ))}
            </div>

            <div className="flex flex-wrap justify-around">
                {filteredProjects.map((item, index) => (
                    <Link data-aos="fade-up" name={item.titleMain} state={{ item }} to={`/projectSingle/${item.id}`}>
                        <div className="group mb-5 cursor-pointer" key={index}>

                            <div className="relative flex justify-center items-center overflow-hidden w-[690px] max-1519:w-[100%] max-1519:h-[390px] h-[490px] ">
                                <img
                                    className="w-[690px] h-[490px] max-450:h-[450px] bg-center bg-cover max-1519:w-[100%] max-1519:h-[390px] object-cover  hover:scale-105 transition-transform duration-300"
                                    src={item.images.imageMain}
                                    alt="project"
                                />
                                <div
                                    className="w-[100px] h-[100px] rounded-full bg-white absolute z-[100] flex justify-center items-center hidden group-hover:flex  transition-opacity duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="38px" viewBox="0 -960 960 960"
                                         width="38px" fill="#000000">
                                        <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/>
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h1 className={'font-bold text-xl mt-5'}>{item.titleMain}</h1>
                                <p className={' text-gray-500'}>{item.title}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <ChangeLanguage/>
        </div>
    );
}
