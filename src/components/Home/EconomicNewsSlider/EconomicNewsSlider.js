"use client"
import moment from 'moment/moment';
import { useEconomicNewsData } from 'src/hooks';
import { Autoplay, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
function EconomicNewsSlider() {
    const url = "https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=10";
    const { data , error } = useEconomicNewsData(url);
    
    return (
        <div className="flex flex-col gap-5 my-10 overflow-hidden">
            <h2 className="font-bold text-xl">Economic news:</h2>
            <Swiper
            slidesPerView={5}
            spaceBetween={10}
            freeMode={true}
            loop={true}
            modules={[FreeMode,Autoplay]}
            autoplay={{delay:3000,disableOnInteraction:false}}
            className="mySwiper w-full flex"
            >
                {
                    data?.data.articles.map((item,i) => (
                        <SwiperSlide key={i} className={`flex pt-40 pb-5 cursor-pointer px-3 text-sm bg-red-400 bg-cover bg-center hover:brightness-110 transition-all duration-300`} style={{backgroundImage:`url("${item?.urlToImage}")`}}>
                            <p className='line-clamp-2 text-white text-shadow'>{item?.title}</p>
                            <div className='flex items-center justify-between font-bold pt-3'>
                                <span className='text-redPublic text-xs text-shadow line-clamp-1'>{item?.author}</span>
                                <span className='w-[1px] h-4 bg-white'></span>
                                <span className='text-xs text-white text-shadow'>{moment(item?.publishedAt).format("YYYY/MM/DD")}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

export default EconomicNewsSlider;