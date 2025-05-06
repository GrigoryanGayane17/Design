import React from 'react';
import {useTranslation} from "react-i18next";

function ChangeLanguage(props) {
    const {t, i18n} = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };


    const flags = {
        "en": "https://cdn-icons-png.freepik.com/512/13481/13481822.png?uid=R179250677&ga=GA1.1.836210414.1706299071",
        "ru": "https://cdn-icons-png.freepik.com/512/16150/16150266.png?uid=R179250677&ga=GA1.1.836210414.1706299071",
        "am": "https://cdn-icons-png.freepik.com/512/299/299840.png?uid=R179250677&ga=GA1.1.836210414.1706299071"
    }
    return (
        <div>
            <div
                className="fixed z-[900] bottom-[2vw] right-[4vh] flex p-1 bg-[#000] rounded-[5px]">
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
        </div>
    );
}

export default ChangeLanguage;