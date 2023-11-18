import Image from "next/image";


function Logo() {
    return (
        <div className="flex items-center w-fit py-5 gap-3 mx-auto font-extrabold text-3xl">
            <Image src={'/image/icon.png'} alt="logo" width={50} height={50}/>
            <div>
                <p>Daily</p>
                <p>Scoop</p>
            </div>
        </div>
    );
}

export default Logo;