'use client'
import Link from "next/link";
import { useState } from "react";

function CollectorsItem({ item }) {
    const [isHover,setIsHover] = useState("");
    const mouseEnterHandle = value => {
        setIsHover(value)
    };
    const mouseLeaveHandle = () => {
        setIsHover("")
    };
    return (
        <div className="relative">
            <li 
            className={
                isHover === item.title
                ?"cursor-pointer transition-all duration-300 head-menu-item-active px-5 border-dotted border-r-[2.5px] border-slate-400"
                :"cursor-pointer transition-all duration-300 head-menu-item-shadow px-5 border-dotted border-r-[2.5px] border-slate-400"
            }
            onMouseEnter={()=>mouseEnterHandle(item.title)}
            onMouseLeave={mouseLeaveHandle}
            >
                {item.title}
            </li>
            <ul className={
                isHover === item.title
                ?
                "bg-slate-300 w-max absolute p-3 text-sm font-light rounded-sm opacity-100 transition-all duration-300 top-[2.3rem] flex flex-col gap-3"
                :
                "bg-slate-300 w-max absolute p-3 text-sm font-light rounded-sm opacity-0 invisible overflow-hidden transition-all duration-300 top-[2.3rem] flex flex-col gap-3"
            }
            onMouseEnter={()=>mouseEnterHandle(item.title)}
            onMouseLeave={mouseLeaveHandle}
            >
                {
                    item.subsets.map((sub,i) => (
                        <li key={i} className="hover:text-bluePublic">
                            <Link href={`/${sub}`}>{sub}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default CollectorsItem;