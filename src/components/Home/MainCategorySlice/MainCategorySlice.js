import Image from "next/image";

function MainCategorySlice() {
    return (
        <div className="py-5 flex items-center justify-between h-[30rem]">
            <section className="flex flex-col justify-center gap-3 h-full text-white">
                <div className="flex flex-col justify-end items-start gap-2 brightness-90 px-5 py-3 rounded-md overflow-hidden  bg-red-300 w-[15rem] h-1/2 bg-cover bg-[url('/image/MainCategorySlice/296c837532e353fa1eafe624d0f21404.jpg')] bg-[center_bottom_-5rem] cursor-pointer hover:brightness-105 transition-all">
                    <span className="text-xs bg-gray-500 rounded-full p-1">Fashion</span>
                    <p className="text-sm text-shadow">Modeling and fashion industry and international fashion festivals</p>
                </div>
                <div className="flex flex-col justify-end items-start gap-2 brightness-90 px-5 py-3 rounded-md overflow-hidden bg-red-300 w-[15rem] h-1/2 bg-cover bg-[url('/image/MainCategorySlice/martin-katler-wx-XBLK1bWA-unsplash.jpg')] bg-center cursor-pointer hover:brightness-105 transition-all">
                    <span className="text-xs bg-gray-500 rounded-full p-1">Cars</span>
                    <p className="text-sm text-shadow">Information about the market and other car information</p>
                </div>
            </section>
            <section className="h-full text-white">
                <div className="flex flex-col justify-end items-start gap-2 brightness-90 px-5 py-3 rounded-md overflow-hidden  bg-red-300 w-[33rem] h-full bg-[url('/image/MainCategorySlice/907bea4a9d4e24ee024af30ce18fda8f.jpg')] bg-cover bg-center cursor-pointer hover:brightness-105 transition-all">
                    <span className="text-xs bg-gray-500 rounded-full p-1">Sport Events</span>
                    <p className="text-sm text-shadow">Important sports events and their sidelines</p>
                </div>
            </section>
            <section className="flex flex-col justify-center gap-3 h-full text-white">
                <div className="flex flex-col justify-end items-start gap-2 brightness-90 px-5 py-3 rounded-md overflow-hidden  bg-red-300 w-[15rem] h-1/2 bg-[url('/image/MainCategorySlice/0514fba99fb54f13be1b13e2971d387a.jpg')] bg-cover bg-center cursor-pointer hover:brightness-105 transition-all">
                    <span className="text-xs bg-gray-500 rounded-full p-1">Political</span>
                    <p className="text-sm text-shadow">The latest political news of the region and the world</p>
                </div>
                <div className="flex flex-col justify-end items-start gap-2 brightness-90 px-5 py-3 rounded-md overflow-hidden bg-red-300 w-[15rem] h-1/2 bg-[url('/image/MainCategorySlice/alex-knight-2EJCSULRwC8-unsplash.jpg')] bg-cover bg-center cursor-pointer hover:brightness-105 transition-all">
                    <span className="text-xs bg-gray-500 rounded-full p-1">Technology</span>
                    <p className="text-sm text-shadow">Full coverage of world technology news</p>
                </div>
            </section>
        </div>
    );
}

export default MainCategorySlice;