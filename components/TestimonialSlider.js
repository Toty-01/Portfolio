// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];

import { BsArrowRight } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from 'next/image';
import { Pagination} from 'swiper';

const TestimonialSlider = () => {
  return <Swiper
  spaceBetween={10}
    pagination={{
      clickable: true,
    }}
    modules={[ Pagination]}
    className="h-[280px] sm:h-[480px] height-workslide"
  >
    {
      testimonialSlider.map((person,index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {/* avatar name position */}
              <div className="">
                <div className="">
                  {/* avatar */}
                  <div className="">Avatar</div>
                  {/* Name */}
                  <div className="">Name</div>
                  {/* Position */}
                  <div className="">Position</div>
                </div>
              </div>
              {/* message */}
              <div className="">quote</div>
            </div>
          </SwiperSlide>
        );
      })
    }
  </Swiper>;
};

export default TestimonialSlider;
