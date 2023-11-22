import SectionTitle from "../../components/Sectiontitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        axios("http://localhost:5000/reviews")
            .then(res => setReviews(res.data))
    }, [])
    return (
        <div className="max-w-[1320px] mx-auto mb-20">
            <SectionTitle
                heading="TESTIMONIALS"
                subHeadng="What Our Clients Say"
            ></SectionTitle>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div>
                                <Rating
                                className="mx-auto"
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                               <p className="flex justify-center text-4xl my-10"> <FaQuoteLeft/></p>
                                <p className="w-[1096px] mx-auto">{review.details}</p>
                                <h1 className="text-center text-2xl text-yellow-500 uppercase mt-2">{review.name}</h1>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;