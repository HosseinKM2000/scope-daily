import Image from "next/image";

function SaveArchive() {
    return (
        <div className="relative">
            <Image src={'/image/saved.png'} alt="save" width={24} height={24}/>
            <div className="absolute top-[-8px] right-[-8px] bg-slate-700 text-white rounded-full w-5 h-5 overflow-hidden flex justify-center items-center text-sm">
                <span>0</span>
            </div>
        </div>
    );
}

export default SaveArchive;