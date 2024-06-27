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
import Image from 'next/image';
import { Pagination} from 'swiper';

const WorkSlider = () => {
  return <Swiper
  spaceBetween={10}
    pagination={{
      clickable: true,
    }}
    modules={[ Pagination]}
    className="h-[280px] sm:h-[480px] height-workslide"
  >
    {
      workSlides.slides.map((slide,index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-1 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div key={index} 
                  width={500}
                  height={300}
                  className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                    <div className="flex items-center justify-center relative overflow-hidden">
                      <Image 
                       key={index}
                        src={image.path}
                        width={500}
                        height={300}
                        alt=''
                        className='object-cover object-bottom height-slides rounded-md'
                      />
                      {/* bg */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#df0707] to-[#1d0a57] opacity-0 group-hover:opacity-80 transition-all duration-700">
                      </div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full xl:group-hover:-translate-y-16 group-hover:-translate-y-8 group-hover:-translate-x-4 transition-all duration-300">
                        <div className="">
                          <div className="">Title part 1</div>
                          <div className="">Title part 2</div>
                          <div className="">icon</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </SwiperSlide>
        );
      })
    }
  </Swiper>;
};

export default WorkSlider;
