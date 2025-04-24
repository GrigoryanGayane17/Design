import Header from '../components/Header.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useTranslation} from "react-i18next";


export default function Home() {
    const {t, i18n} = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const Services = t("home.section2.fitures", {returnObjects: true}) || [];
    console.log(Services)


    const flags = {
        "en": "https://cdn-icons-png.freepik.com/512/13481/13481822.png?uid=R179250677&ga=GA1.1.836210414.1706299071",
        "ru": "https://cdn-icons-png.freepik.com/512/16150/16150266.png?uid=R179250677&ga=GA1.1.836210414.1706299071",
        "am": "https://cdn-icons-png.freepik.com/512/299/299840.png?uid=R179250677&ga=GA1.1.836210414.1706299071"
    }

    return (
        <div>
            <Header/>
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

                <div
                    className="fixed bottom-[2vw] right-[4vh] flex p-1 bg-[#000] rounded-[5px] hidden sm:block xs:block">
                    <img onClick={() => changeLanguage('en')}
                         className={'w-[48px] rounded-[15px] h-[48px] m-1 cursor-pointer hover:shadow-[0px_0px_15px_#ffffff] duration-300'}
                         src={flags.en}/>
                    <img onClick={() => changeLanguage('ru')}
                         className={'w-[48px] rounded-[15px] h-[48px] m-1 cursor-pointer hover:shadow-[0px_0px_15px_#ffffff] duration-300'}
                         src={flags.ru}/>
                    <img onClick={() => changeLanguage('am')}
                         className={'w-[48px] rounded-[15px] h-[48px] m-1 cursor-pointer hover:shadow-[0px_0px_15px_#ffffff] duration-300'}
                         src={flags.am}/>
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
                            <div className={' flex items-center justify-between lg:p-5 md:p-5 sm:p-2  flex-wrap items-center max-1060:flex-col max-1060:text-center'}>
                                <div >
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
        </div>
    );
}
