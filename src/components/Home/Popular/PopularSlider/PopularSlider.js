"use client"
import { usePopularNewsData } from "src/hooks";
import { setView } from "src/methods/math/math";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HorizontalSlides from "./HorizontalSlides/HorizontalSlides";
import VerticalSlides from "./VerticalSlides/VerticalSlides";

function PopularSlider(props) {
    const {
        dirC,
        slides,
        url,
        name,
        space,
        delay,
    } = props;
    const { data , isLoading } = usePopularNewsData({url,name});
    console.log(url)
    return (
            <Swiper
            slidesPerView={slides}
            spaceBetween={space}
            direction={dirC}
            
            freeMode={true}
            loop={true}
            modules={[FreeMode,Autoplay]}
            autoplay={{delay,disableOnInteraction:false}}
            className="mySwiper flex w-full"
            >
                {
                    dirC === "horizontal"
                    ?
                    <>
                    {
                        data?.data.articles.map((item,i) => (
                            <SwiperSlide key={i} className={`flex flex-col cursor-pointer hover:brightness-110 transition-all duration-300 w-fit-content`}>
                                <HorizontalSlides item={item} setView={setView} i={i}/>
                            </SwiperSlide>
                        ))
                    }
                    </>
                    :
                    <>
                    {
                        data?.data.articles.map((item,i) => (
                            <SwiperSlide key={i} className={`flex flex-row gap-3 cursor-pointer hover:brightness-110 transition-all duration-300 w-full`}>
                                <VerticalSlides item={item} setView={setView} i={i}/>
                            </SwiperSlide>
                        ))
                    }
                    </>
                }
            </Swiper>
    );
}

export default PopularSlider;