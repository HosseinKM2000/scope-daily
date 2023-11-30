import PopularSlider from "../PopularSlider/PopularSlider";

function LeftSide() {
    const url = process.env.NEXT_PUBLIC_POPULAR_NEWS_URL;
    return (
        <div className="flex flex-col gap-5 w-[45rem]">
            <div className="border-b-[2px] border-gray-200 w-full">
                <h3 className="py-3 border-b-[2px] border-gray-800 font-bold text-xl w-fit">Popular:</h3>
            </div>
            <PopularSlider dirC={"horizontal"} slides={4} url={url} name={"PopularNews"} space={25} delay={3000}/>
        </div>
    );
}

export default LeftSide;