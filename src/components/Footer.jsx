import React from 'react';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";


function Footer(props) {
    const {t} = useTranslation();

    const FooterMain = t("footer.Main", {returnObjects: true}) || [];
    const FooterOthers = t("footer.Others", {returnObjects: true}) || [];
    const inputPanel = t("footer.inputPanel", {returnObjects: true}) || [];


    return (
        <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row flex-wrap lg:justify-between md:justify-center sm:justify-center ms-5 mr-5">
            <div className={'ms-5'}>
                <h1 className="mt-5 text-[50px] sm:text-center sm:text-[70px] md:text-[100px] lg:text-[90px] leading-[70px] sm:leading-[30px] md:leading-[100px] lg:leading-[150px] font-bold animate-fadeInUp">
                    {inputPanel.title1}
                </h1>
                <div className={'flex mt-[50px] mb-[50px] sm:justify-center'}>
                    <div className={'mr-[100px]'}>
                        <p className={'text-gray-500 font-medium'}>Main</p>
                        {FooterMain.map((link) => (
                            <div className={'mt-5 mb-5 font-medium'}>
                                <Link
                                    className="header-links"
                                    to={link.href}
                                >
                                    <button
                                        className="cursor-pointer  rounded-xl text-black font-medium group"
                                    >
                                        <div className="relative overflow-hidden">
                                            <p
                                                className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                                            >
                                                {link.title}
                                            </p>
                                            <p
                                                className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                                            >
                                                {link.title}
                                            </p>
                                        </div>
                                    </button>
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div>
                        <p className={'text-gray-500 font-medium'}>Others</p>
                        {FooterOthers.map((link) => (
                            <div className={'mt-5 mb-5 font-medium'}>
                                <Link
                                    className="header-links"
                                    to={link.href}
                                >
                                    <button
                                        className="cursor-pointer  rounded-xl text-black font-medium group"
                                    >
                                        <div className="relative overflow-hidden">
                                            <p
                                                className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                                            >
                                                {link.title}
                                            </p>
                                            <p
                                                className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                                            >
                                                {link.title}
                                            </p>
                                        </div>
                                    </button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={'mr-5'}>
                <h1 className={'font-bold text-4xl mb-5 lg:text-left md:text-center sm:text-center'}>{inputPanel.title2}</h1>
                <div>
                    <p className={'font-normal'}>{inputPanel.name}</p>
                    <input className={'footer-input'} type={'text'} placeholder={inputPanel.namePlaceholder}/>

                    <p className={'font-normal'}>{inputPanel.email}</p>
                    <input className={'footer-input'} type={'text'} placeholder={inputPanel.emailPlaceholder}/>

                    <p className={'font-normal'}>{inputPanel.yourMessage}</p>
                    <input className={'footer-input mb-5'} type={'text'}
                           placeholder={inputPanel.yourMessagePlaceholder}/>
                    <button className={'mt-5  footer-button flex justify-center items-center'}>
                        <span>
                            Send Message
                        </span>
                        <span className={'ms-5'}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                 fill="#fff">
                                <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Footer;