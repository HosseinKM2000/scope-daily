import { MdOutlinePerson4 } from 'react-icons/md';
import { TbEyeCheck } from "react-icons/tb";
function HorizontalSlides({ item , setView , i }) {
    return (
        <>
        <div className="bg-cover rounded-xl overflow-hidden bg-center w-[10rem] h-[10rem] bg-red-400" style={{backgroundImage:`url("${item?.urlToImage}")`}}></div>
        <h4 className="break-words text-sm font-bold w-[10rem] py-3 line-clamp-3">{item?.title}</h4>
        <div className="flex items-center gap-1 mt-3 text-xs font-bold text-gray-400">
            <div className="flex items-center gap-1">
                <MdOutlinePerson4/>
                <span>{item?.author}</span>
            </div>
            <span>|</span>
            <div className="flex items-center gap-1">
                <TbEyeCheck/>
                <span>{setView(i)}</span>
            </div>
        </div>
        </>
    );
}

export default HorizontalSlides;