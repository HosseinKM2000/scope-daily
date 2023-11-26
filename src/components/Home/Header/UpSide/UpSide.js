'use client'
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaGooglePlusG, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import HeaderNav from "src/utility/HeaderNav/HeaderNav";
import SocialMediaContainer from "src/utility/SocialMediaContainer/SocialMediaContainer";
import DateBox from "./DateBox/DateBox";
import LoginButton from "./LoginButton/LoginButton";

function UpSide() {
const navbarStyle = "flex items-center gap-5 px-8 py-3 w-fit";
const socialMediaStyle = "flex items-center gap-5 px-8 py-3 w-fit";
const navbarItems = [
    "About",
    "Contacts",
    "References",
    "Supports"
];
const socialMediaItems = [
    {Icon:FaFacebookF,path:"https://www.facebook.com",style:"hover:text-blue-700 transition-all text-lg"},
    {Icon:BsTwitter,path:"https://twitter.com",style:"hover:text-blue-400 transition-all text-lg"},
    {Icon:FaGooglePlusG,path:"https://www.google.com",style:"hover:text-orange-500 transition-all text-lg"},
    {Icon:FaTelegramPlane,path:"https://web.telegram.org",style:"hover:text-sky-500 transition-all text-lg"},
    {Icon:FaYoutube,path:"https://www.youtube.com",style:"hover:text-red-700 transition-all text-lg"},
];

    return (
        <div className="bg-blackMore text-whiteSmoke flex items-center justify-between px-3 sticky top-0 z-50">
            <HeaderNav items={navbarItems} style={navbarStyle}/>
            <div className="flex items-center">
                <SocialMediaContainer items={socialMediaItems} style={socialMediaStyle}/>
                <LoginButton/>
                <DateBox/>
            </div>
        </div>
    );
}

export default UpSide;