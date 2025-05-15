import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useTranslation} from "react-i18next";
import ChangeLanguage from "../components/ChangeLanguage.jsx";
import {Link} from "react-router-dom";
import React from "react";


export default function Home() {
    const {t} = useTranslation();
    const Projects = t("projects", {returnObjects: true}) || [];
    const Services = t("home.section2.fitures", {returnObjects: true}) || [];
    const WhyChooseUs = t("home.section4", {returnObjects: true}) || [];
    const Numbers = t("home.section5", {returnObjects: true}) || [];

    return (
        <div>
            <ChangeLanguage/>
            <section className={'home-section1 p-5'}>
                <div className="w-full lg:h-[70vh] sm:h-[30vh] md:h-[50vh] flex items-center">
                    <div className="flex flex-wrap">
                        <div className="w-[90%] mt-5 ms-5">
                            <h1 className="mt-5  text-[50px] sm:text-[70px] md:text-[80px] lg:text-[130px] leading-[70px] sm:leading-[30px] md:leading-[100px] lg:leading-[150px] font-bold animate-fadeInUp">
                                {t("home.section1.titleMain")}
                            </h1>
                        </div>
                    </div>
                </div>

                <div data-aos="zoom-in" className={'hidden max-1410:block mt-5 mb-5'}>
                    <div className={'slider'}>
                        <div className={'slide-track'}>
                            <div className={'slide'}>
                                <img className={'w-full'}
                                     src={'https://cdn.prod.website-files.com/67653802b00ee14ccb35db82/6768133f6661bd59e5cc9c06_Rectangle%2032-p-800.webp'}/>
                            </div>
                            <div className={'slide'}>
                                <img className={'w-full'}
                                     src={'https://cdn.prod.website-files.com/67653802b00ee14ccb35db82/6768133f717640eb15aa6f36_Rectangle%2033.webp'}/>
                            </div>
                            <div className={'slide'}>
                                <img className={'w-full'}
                                     src={'https://cdn.prod.website-files.com/67653802b00ee14ccb35db82/6768133f8990a76e04151dc2_Rectangle%2034.webp'}/>
                            </div>

                            <div className={'slide'}>
                                <img className={'w-full'}
                                     src={'https://cdn.prod.website-files.com/67653802b00ee14ccb35db82/6768133f6661bd59e5cc9c06_Rectangle%2032-p-800.webp'}/>
                            </div>
                            <div className={'slide'}>
                                <img className={'w-full'}
                                     src={'https://cdn.prod.website-files.com/67653802b00ee14ccb35db82/6768133f717640eb15aa6f36_Rectangle%2033.webp'}/>
                            </div>
                            <div className={'slide'}>
                                <img className={'w-full'}
                                     src={'https://cdn.prod.website-files.com/67653802b00ee14ccb35db82/6768133f8990a76e04151dc2_Rectangle%2034.webp'}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'flex justify-center'}>
                    <div data-aos="fade-up" className={'hidden max-1410:block mt-5 mb-5 flex flex-wrap p-2'}>
                        <div className={'flex flex-wrap justify-center'}>
                            <div className={'w-[300px] text-center'}>
                                <h1 className={'text-4xl font-bold pb-5 '}>
                                    {t("home.section1.aboutTitle")}
                                </h1>
                            </div>
                            <div className={'max-w-[500px] mb-5 p-3'}>
                                <p className={'leading-[30px] text-[18px] text-color-black-900'}>
                                    {t("home.section1.aboutText1")}
                                </p>
                                <p className={'leading-[30px] text-[18px] text-color-black-900 mt-7'}>
                                    {t("home.section1.aboutText2")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-5 w-full flex justify-between max-1410:hidden">
                    <div>
                        <img data-aos="fade-up" className={'w-[565px] h-[574px]'}
                             src={'https://cdn.prod.website-files.com/67653802b00ee14ccb35db82/6768133f6661bd59e5cc9c06_Rectangle%2032-p-800.webp'}/>
                    </div>
                    <div className={'w-[700px]'}>
                        <div className={'flex flex-wrap'}>
                            <div className={'w-[200px]'}>
                                <h1 className={'text-4xl font-bold'}>
                                    {t("home.section1.aboutTitle")}
                                </h1>
                            </div>
                            <div className={'w-[500px] mb-5'}>
                                <p className={' leading-[30px] text-[18px] text-color-black-900'}>
                                    {t("home.section1.aboutText1")}
                                </p>
                                <p className={' leading-[30px] text-[18px] text-color-black-900 mt-7'}>
                                    {t("home.section1.aboutText2")}
                                </p>
                            </div>
                            <div className={'flex items-end mt-5 justify-center'}>
                                <div className={'flex gap-5'}>
                                    <img data-aos="fade-up" className={'w-[301px] h-[300px] object-cover'}
                                         src={'https://cdn.prod.website-files.com/67653802b00ee14ccb35db82/6768133f717640eb15aa6f36_Rectangle%2033.webp'}/>
                                    <img data-aos="fade-up" className={'w-[230px] h-[300px] object-cover'}
                                         src={'https://cdn.prod.website-files.com/67653802b00ee14ccb35db82/6768133f8990a76e04151dc2_Rectangle%2034.webp'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={'home-section2 p-5 max-1060:text-center'}>
                <div data-aos="fade-up" className="m-5">
                    <h1 className="mt-5  text-[50px] sm:text-[70px] md:text-[80px] lg:text-[130px]  font-bold animate-fadeInUp">
                        {t("home.section2.titleMain")}
                    </h1>
                </div>

                <div className={'p-5'}>
                    {Services.map((item) => (
                        <div data-aos="fade-up">
                            <div
                                className={' flex items-center justify-between lg:p-5 md:p-5 sm:p-2  flex-wrap items-center max-1060:flex-col max-1060:text-center'}>
                                <div>
                                    <h1 className={'text-3xl font-bold'}>{item.title}</h1>
                                </div>
                                <div>
                                    <p className={'font-medium text-xl mt-2 mb-2'}>{item.keyWords.first}</p>
                                    <p>|</p>
                                    <p className={'font-medium text-xl mt-2 mb-2'}>{item.keyWords.second}</p>
                                    <p>|</p>
                                    <p className={'font-medium text-xl mt-2 mb-2'}>{item.keyWords.third}</p>
                                </div>
                                <div className={'lg:w-[300px] md:w-[300px] sm:w-[280px]'}>
                                    <p className={'font-thin'}>{item.description}</p>
                                </div>
                            </div>
                            <hr className={'m-5'}/>
                        </div>
                    ))}
                </div>
            </section>

            <section className={'home-section3 p-5'}>
                <h1 className="mt-5  text-[50px] sm:text-[70px] md:text-[80px] lg:text-[130px]  font-bold animate-fadeInUp">
                    {t("home.section3.titleMain")}
                </h1>
                <div className="flex flex-wrap justify-around">
                    {Projects.map((item, index) => (
                        <Link data-aos="fade-up" name={item.titleMain} state={{item}} to={`/projectSingle/${item.id}`}>
                            <div className="group mb-5 cursor-pointer" key={index}>

                                <div
                                    className="relative flex justify-center items-center overflow-hidden w-[690px] max-1519:w-[100%] max-1519:h-[390px] h-[490px] ">
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
            </section>

            <section className={'home-section4 p-5 max-1060:text-center'}>
                <div data-aos="fade-up" className="m-5">
                    <h1 className="mt-5  text-7xl  font-bold animate-fadeInUp">
                        {t("home.section4MainTitle")}
                    </h1>
                </div>

                <div className={'p-5'}>
                    {WhyChooseUs.map((item) => (
                        <div data-aos="fade-up">
                            <div
                                className={' flex justify-around lg:p-5 md:p-5 sm:p-2  flex-wrap items-center max-1060:flex-col max-1060:text-center'}>
                                <div>
                                    <h1 className={'text-xl font-bold'}>{item.titleNum}</h1>
                                </div>
                                <div className={'lg:w-[500px] md:w-[300px] sm:w-[280px] flex justify-center'}>
                                    <div className={'m-auto'}>
                                        <h1 className={'text-5xl font-bold mt-5'}>{item.titleMain}</h1>
                                        <p className={'font-thin mt-5'}>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                            <hr className={'m-5'}/>
                        </div>
                    ))}
                </div>
            </section>

            <section className="home-section5 p-5 flex justify-center">
                <div className="flex flex-wrap gap-6 w-full max-w-[950px] justify-center lg:justify-between">
                    {Numbers.map((item) => (
                        <div data-aos="fade-up" key={item.id} className="text-center p-4 bg-white">
                            <h1 className="lg:text-9xl text-7xl font-bold text-black">{item.num}</h1>
                            <p className="text-gray-700 mt-2">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>


        </div>
    );
}
