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
const iconStyle = "text-lg";
const navbarItems = [
    "About",
    "Contacts",
    "References",
    "Supports"
];
const socialMediaItems = [
    {Icon:FaFacebookF,path:"https://www.facebook.com"},
    {Icon:BsTwitter,path:"https://twitter.com"},
    {Icon:FaGooglePlusG,path:"https://www.google.com"},
    {Icon:FaTelegramPlane,path:"https://web.telegram.org"},
    {Icon:FaYoutube,path:"https://www.youtube.com"},
];

    return (
        <div className="bg-blackMore text-whiteSmoke flex items-center justify-between px-3">
            <HeaderNav items={navbarItems} style={navbarStyle}/>
            <div className="flex items-center">
                <SocialMediaContainer items={socialMediaItems} style={socialMediaStyle} iconStyle={iconStyle}/>
                <LoginButton/>
                <DateBox/>
            </div>
        </div>
    );
}

export default UpSide;