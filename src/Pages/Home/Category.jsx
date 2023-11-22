import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from "../../assets/home/slide1.jpg"
import slide2 from "../../assets/home/slide2.jpg"
import slide3 from "../../assets/home/slide3.jpg"
import slide4 from "../../assets/home/slide4.jpg"
import slide5 from "../../assets/home/slide5.jpg"
import SectionTitle from '../../components/SectionTitle';

const Category = () => {
    return (
        <div className='my-20 max-w-[1320px] mx-auto'>
            <SectionTitle
            heading="ORDER ONLINE"
            subHeadng="From 11:00am to 10:00pm"
            >
            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} />
                    <h1 className='text-3xl text-white -mt-[45px] mb-16 ml-[90px] font-extrabold'>SALAD</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} />
                    <h1 className='text-3xl text-white -mt-[45px] mb-16 ml-[90px] font-extrabold'>PIZZAS</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} />
                    <h1 className='text-3xl text-white -mt-[45px] mb-16 ml-[90px] font-extrabold'>SOUPS</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} />
                    <h1 className='text-3xl text-white -mt-[45px] mb-16 ml-[90px] font-extrabold'>DESSERTS</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} />
                    <h1 className='text-3xl text-white -mt-[45px] mb-16 ml-[90px] font-extrabold'>SALAD</h1>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;