// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'Terre Valserhône tourisme',
          path: '/ot.png',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
        {
          title: 'RSE 01',
          path: '/rse01.png',
        },
      ],
    },
    {
      images: [
        {
          title: 'Parc des oiseaux',
          path: '/parcdo.png',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'talis.community',
          path: '/talis.png',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

import { BsArrowRight } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Pagination} from 'swiper';

const WorkSlider = () => {
  return <Swiper
    breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    }}
    freeMode={true}
    pagination={{
      clickable: true,
    }}
    modules={[ Pagination]}
    className="h-[240px] sm:h-[340px]"
  >
    {
      workSlides.slides.map((item,index) => {
        return (
          <SwiperSlide key={index}>

          </SwiperSlide>
        );
      })
    }
  </Swiper>;
};

export default WorkSlider;
