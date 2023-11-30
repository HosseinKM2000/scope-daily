import { MdOutlinePerson4 } from "react-icons/md";
import { TbEyeCheck } from "react-icons/tb";

function VerticalSlides({ item , setView , i }) {
    return (
        <>
        <div className="bg-cover rounded-xl overflow-hidden bg-center w-[8rem] h-[5rem] bg-red-400" style={{backgroundImage:`url("${item?.urlToImage}")`}}></div>
        <div className="flex flex-col">
            <div className="flex items-center gap-1 text-xs font-bold text-orange-400">
                <div className="flex items-center gap-1">
                    <MdOutlinePerson4/>
                    <span className="line-clamp-1 w-[5rem]">{item?.author}</span>
                </div>
                <span>|</span>
                <div className="flex items-center gap-1">
                    <TbEyeCheck/>
                    <span>{setView(i)}</span>
                </div>
            </div>
            <h4 className="break-words text-xs font-bold pt-3 line-clamp-3 w-[5rem]">{item?.title}</h4>
        </div>
        </>
    );
}

export default VerticalSlides;