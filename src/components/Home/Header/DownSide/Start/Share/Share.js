"use client"
import classNames from 'classnames';
import Link from 'next/link';
import { useState } from 'react';
import { FaInstagram, FaTelegramPlane, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi';
import { GrLink } from 'react-icons/gr';
import { RiFacebookFill } from 'react-icons/ri';

function Share() {
    const [click,setClick] = useState(false);
    const socialMedia = [
        {icon:RiFacebookFill,color:"text-[#276EF7]",hover:"hover:bg-[#276EF7]",path:"https://www.facebook.com"},
        {icon:FaTwitter,color:"text-[#1C9CEA]",hover:"hover:bg-[#1C9CEA]",path:"https://twitter.com"},
        {icon:FaInstagram,color:"text-[#E53974]",hover:"hover:bg-[#E53974]",path:"https://instagram.com"},
        {icon:FaWhatsapp,color:"text-[#00CA70]",hover:"hover:bg-[#00CA70]",path:"https://whatsapp.com"},
        {icon:FaTelegramPlane,color:"text-[#29B6F6]",hover:"hover:bg-[#29B6F6]",path:"https://web.telegram.org"},
    ];
    const copyHref = () => {
        const attributes = {
            text:"copy was successfully",
            type:"toastSuccess"
        }
        import("@/methods/typography/typography" /*webpackChunkName: "copyUrlPath"*/).then(({copyUrlPath}) => copyUrlPath());
        import("@/utility/ToastApi/ToastApi" /*webpackChunkName: "toastApi"*/).then(({toastAction}) => toastAction(attributes));
    };
    
    return (
        <div className='relative'>
            <FiShare2 
            className={
                click
                ?'text-xl text-red-600 cursor-pointer'
                :'text-xl hover:text-red-600 cursor-pointer'
            }
            onClick={()=>setClick(!click)}
            />
            <div 
            className={classNames(
                "w-64 h-32 rounded-md absolute bg-bluePublic top-[-8rem] left-[-0.5rem] transition-all duration-700",{
                "scale-0": !click, "scale-100": click
                }
            )}></div>
            <div className={classNames('absolute flex flex-col transition-all gap-2 bg-white w-max px-1 py-2 shadow-[1px_1px_8px_1px_rgba(0,0,0,0.3)] top-[-9rem]',{
                "scale-0": !click, "scale-100": click
            })}> 
                <p className='text-sm font-bold'>Share page link</p>
                <hr className='bg-gray-300 h-[2px] w-full'/>
                <div className='flex items-center gap-2'>
                    {
                        socialMedia.map((item,i)=>(
                            <Link href={item.path} key={i} className={"w-[2rem] h-[2rem] flex justify-center items-center border-[1px] border-gray-400 cursor-pointer hover:text-white transition-all "+item.hover+" "+item.color}>
                                {
                                    <item.icon/>
                                }
                            </Link>
                        ))
                    }
                </div>
                <div className='flex items-center gap-1 border-2 border-gray-600 rounded-sm overflow-hidden p-1'>
                    <GrLink/>
                    <input  type="url" defaultValue={window.location.href} className='outline-none border-none text-xs font-bold'/>
                    <button type="button" className='px-3 py-1 bg-bluePublic text-white hover:brightness-110 transition-all text-sm font-bold tracking-widest' onClick={copyHref}>Copy</button>
                </div>
            </div>
        </div>
    );
}

export default Share;