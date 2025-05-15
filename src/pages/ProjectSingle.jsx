import React, {useState} from 'react';
import {Link, useLocation, useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";

function ProjectSingle(props) {
    const {t} = useTranslation();
    const Projects = t("projects", {returnObjects: true}) || [];
    const {id} = useParams();
    const location = useLocation();
    const {item} = location.state || {};
    console.log(item)
    return (
        <div className={'p-[50px]'}>
            <div data-aos="fade-up" className={'mb-5 h-[4 0vh]'}>
                <h1 className="mt-5 mb-5 text-[50px] sm:text-[40px] md:text-[100px] lg:text-[110px] leading-[70px] sm:leading-[30px] md:leading-[100px] lg:leading-[150px] font-bold animate-fadeInUp max-450:text-center">
                    {item?.titleMain}
                </h1>
            </div>

            <div className={'flex flex-wrap items-center '}>
                <div data-aos="fade-up" className={'lg:w-[50%]'}>
                    <h1 className={'text-[40px]  font-bold mb-5 '}>{item.aboutProject.title}</h1>
                    <div>
                        <p className={'text-gray-500 sm:text-[15px] lg:text-[20px] md:text-[20px] mr-[50px]'}>{item.aboutProject.description1}</p>
                        <p className={'text-gray-500 sm:text-[15px] lg:text-[20px] md:text-[20px] mr-[50px] mt-5'}>{item.aboutProject.description2}</p>
                    </div>
                </div>
                <div data-aos="fade-up" className={'lg:w-[50%]'}>
                    <div className={'flex flex-wrap lg:justify-start md:justify-center sm:justify-center'}>
                        <div data-aos="fade-up" className={'m-[30px]'}>
                            <h4 className={'font-normal text-[20px]'}>Project Name</h4>
                            <p className={'font-normal text-gray-400 text-[18px]'}>Arcane Software</p>
                        </div>
                        <div data-aos="fade-up" className={'m-[30px]'}>
                            <h4 className={'font-normal text-[20px]'}>Headquarters</h4>
                            <p className={'font-normal text-gray-400 text-[18px]'}>New York,US</p>
                        </div>
                        <div data-aos="fade-up" className={'m-[30px]'}>
                            <h4 className={'font-normal text-[20px]'}>Industry</h4>
                            <p className={'font-normal text-gray-400 text-[18px]'}>Software developers</p>
                        </div>
                        <div data-aos="fade-up" className={'m-[30px]'}>
                            <h4 className={'font-normal text-[20px]'}>Company Size</h4>
                            <p className={'font-normal text-gray-400 text-[18px]'}>50+ employers</p>
                        </div>
                        <div data-aos="fade-up" className={'m-[30px]'}>
                            <h4 className={'font-normal text-[20px]'}>Timeline</h4>
                            <p className={'font-normal text-gray-400 text-[18px]'}>6 Months</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'mt-[50px]'}>
                <img data-aos="fade-zoom-in"
                     data-aos-easing="ease-in-back"
                     data-aos-delay="600"
                     data-aos-offset="0"
                     className={'w-[100%] h-[100vh] object-cover'} src={item.images.imageMain}/>
            </div>

            <div className={'mb-[50px]'}>
                <h1 data-aos="fade-up" className={'text-[40px]  font-bold mb-5 mt-5 '}>{item.problems.title}</h1>
                <p data-aos="fade-up" className={'text-gray-500 sm:text-[15px] lg:text-[20px] md:text-[20px] mt-5 mb-5 mr-[50px]'}>{item.problems.description1}</p>
                <p data-aos="fade-up" className={'text-gray-500 sm:text-[15px] lg:text-[20px] md:text-[20px]mt-5 mr-[50px]'}>{item.problems.description2}</p>
            </div>

            <div className={'flex justify-between'}>
                <img data-aos="fade-up" className={'w-[49%] object-cover'} src={item.images.image1}/>
                <img data-aos="fade-up" className={'w-[49%] object-cover'} src={item.images.image2}/>
            </div>

            <div className={'mb-[50px]'}>
                <h1 data-aos="fade-up" className={'text-[40px]  font-bold mb-5 mt-5 '}>{item.solutions.title}</h1>
                <p data-aos="fade-up" className={'text-gray-500 sm:text-[15px] lg:text-[20px] md:text-[20px] mt-5 mb-5 mr-[50px]'}>{item.solutions.description1}</p>
                <p data-aos="fade-up" className={'text-gray-500 sm:text-[15px] lg:text-[20px] md:text-[20px]mt-5 mr-[50px]'}>{item.solutions.description2}</p>
            </div>

           <div className={'flex flex-wrap justify-center'}>
               <h1 data-aos="fade-up" className={'text-[40px]  font-bold mb-5 mt-5 '}>Similar Works</h1>
               <div className="flex m-1 flex-wrap justify-between">
                   <Link className={'w-[49%]'} data-aos="fade-up" name={Projects[0].titleMain} state={{item}} to={`/projectSingle/${Projects[0].id}`}>
                       <div className="group mb-5 cursor-pointer" >
                           <div
                               className="relative flex justify-center items-center overflow-hidden w-[690px] max-1519:w-[100%] max-1519:h-[390px] h-[490px] ">
                               <img
                                   className="w-[100%] h-[490px] max-450:h-[450px] bg-center bg-cover max-1519:w-[100%] max-1519:h-[390px] object-cover  hover:scale-105 transition-transform duration-300"
                                   src={Projects[0].images.imageMain}
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
                               <h1 className={'font-bold text-xl mt-5'}>{Projects[0].titleMain}</h1>
                               <p className={' text-gray-500'}>{Projects[0].title}</p>
                           </div>
                       </div>
                   </Link>

                   <Link className={'w-[49%]'} data-aos="fade-up" name={Projects[1].titleMain} state={{item}} to={`/projectSingle/${Projects[1].id}`}>
                       <div className="group mb-5 cursor-pointer" >
                           <div
                               className="relative flex justify-center items-center overflow-hidden w-[690px] max-1519:w-[100%] max-1519:h-[390px] h-[490px] ">
                               <img
                                   className="w-[100%] h-[490px] max-450:h-[450px] bg-center bg-cover max-1519:w-[100%] max-1519:h-[390px] object-cover  hover:scale-105 transition-transform duration-300"
                                   src={Projects[1].images.imageMain}
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
                               <h1 className={'font-bold text-xl mt-5'}>{Projects[1].titleMain}</h1>
                               <p className={' text-gray-500'}>{Projects[1].title}</p>
                           </div>
                       </div>
                   </Link>
               </div>
           </div>
        </div>
    );
}

export default ProjectSingle;