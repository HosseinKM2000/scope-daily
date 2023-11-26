"use client"
import classNames from "classnames";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

function Search() {
    const [click,setClick] = useState(false);
    return (
        <div className="relative">
            <IoIosSearch 
            className={
                click
                ?"text-2xl text-red-600 cursor-pointer"
                :"text-2xl hover:text-red-600 transition-all cursor-pointer"
            } 
            onClick={()=>setClick(!click)}
            />
            <div 
            className={classNames(
                "w-52 h-20 rounded-md absolute bg-bluePublic top-12 left-[-0.5rem] transition-all duration-700",{
                "scale-0": !click, "scale-100": click
                }
            )}></div>
            <div 
            className={classNames(
                "flex w-52 flex-col gap-3 rounded-sm shadow-[1px_1px_8px_1px_rgba(0,0,0,0.3)] px-1 py-2 absolute bg-white top-9 transition-all",{
                "scale-0": !click, "scale-100": click
                }
            )}>
                <input type="search" placeholder="search..." className="border-[1px] p-1 outline-none text-sm border-[#b1b1b1] rounded-sm"/>
                <button type="button" className="w-full bg-bluePublic rounded-sm text-white font-bold tracking-widest hover:brightness-110 transition-all">Go</button>
            </div>
        </div>
    );
}

export default Search;




