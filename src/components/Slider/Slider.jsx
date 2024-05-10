import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import SingleSlide from "./SingleSlide";

export default function Slider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
        <SwiperSlide>
          <SingleSlide
            imgLink={"url(https://i.ibb.co/wzwV7sW/nonfiction-2021.png)"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SingleSlide
            imgLink={
              "url(https://i.ibb.co/wY3CyNP/HA426-Summer-Reading-adults-flatlay-Drama-facebook-v3.jpg)"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <SingleSlide
            imgLink={
              "url(https://i.ibb.co/C5gxz1J/best-sci-fi-books-ever-e1678272724101-1000x563-jpg.webphttps://i.ibb.co/64vb0NY/1-best-thriller-books-index-comp-649d9b68c3157.jpg)"
            }
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
