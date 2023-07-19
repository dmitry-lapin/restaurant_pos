import React from "react";
import Logo from "../../../../UI/logo";
import WhatsAppLogo from "../../../../assets/media_icons/whatsapp.png"
import TelegramLogo from "../../../../assets/media_icons/telegram.png"
import MailLogo from "../../../../assets/media_icons/mail.png"
import AuthorShipLogo from "../../../../assets/common_icons/authorship.png"

const InfoContainer = () => {
    return(
        <div className="flex flex-col items-center bg-zinc-900 mx-3 mb-3 rounded-lg mt-auto space-y-3 pt-6 border-2 border-zinc-500">
            <div>
                <Logo params="font-semibold self-center text-3xl md:text-2xl"/>
            </div>
            <div className="text-center text-white text-md md:text-xs px-16 md:px-4">
                <p>Cutting-edge restaurant POS system revolutionizing operations management<span className="md:hidden">, elevating customer service standards, and maximizing profitability for your business.</span></p>
            </div>
            <div>
                <ul className="inline-flex space-x-7 md:space-x-3 text-white font-semibold text-sm md:text-xs text-center items-center md:px-3">
                    <li>F.A.Q.</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div>
                <ul className="flex space-x-3 items-center">
                    <li className="p-1.5 hover:bg-zinc-950 duration-100 rounded-xl "><img className="w-10 h-10 md:w-7 md:h-7" src={WhatsAppLogo} alt="whatsApp logo"/></li>
                    <li className="p-1.5 hover:bg-zinc-950 duration-100 rounded-xl "><img className="w-10 h-10 md:w-7 md:h-7" src={TelegramLogo} alt="telegram logo"/></li>
                    <li className="p-1.5 hover:bg-zinc-950 duration-100 rounded-xl "><img className="w-10 h-10 md:w-7 md:h-7" src={MailLogo} alt="mail logo"/></li>
                </ul>
            </div>
            <div className="bg-zinc-900 w-full border-t-2 border-zinc-500 px-4 py-3 rounded-b-lg text-white font-normal text-sm md:text-xs flex space-x-3 items-center">
                <img className="w-10 h-10" src={AuthorShipLogo} alt="Authorship logo"/>
                <h1>The project was designed to develop practical skills by Lapin Dmytro, design by Ronas IT</h1>
            </div>
        </div>
    );
}

export default InfoContainer;