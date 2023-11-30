import PopularSlider from "../PopularSlider/PopularSlider";

function RightSide() {
    const url = process.env.NEXT_PUBLIC_MORE_POPULAR_NEWS_URL;
    return (
        <div className="flex flex-col gap-5 w-[30%] h-full">
            <div className="border-b-[2px] border-gray-200">
                <h3 className="py-3 w-fit border-b-[2px] border-gray-800 font-bold text-xl">More:</h3>
            </div>
            <PopularSlider dirC={"vertical"} slides={3} url={url} name={"MorePopularNews"} space={3} delay={4000} />
        </div>
    );
}

export default RightSide;