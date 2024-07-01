// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'talis.community',
          path: '/talis.png',
          ancre: '/talis-community',
        },
        {
          title: 'Lockify',
          path: '/lockify.png',
          ancre: '/lockify',
        },
        {
          title: 'OT Terre Valserhône',
          path: '/ot.png',
          ancre: '/Ot-terre-valserhone',
        },
        {
          title: 'RSE 01',
          path: '/rse01.png',
          ancre: '/rse01',
        },
      ],
    },
    {
      images: [
        {
          title: 'Parc des oiseaux',
          path: '/parcdo.png',
          ancre: '/parc-des-oiseaux',
        },
        {
          title: 'Carrefour Cadours',
          path: '/carrefour.png',
          ancre: '/carrefour-contact-cadours',
        },
        {
          title: 'Chauffeur Prestige',
          path: '/chauf.png',
          ancre: '/chauffeur-prestige',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
          ancre: '/parc-des-oiseaux',
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
                  <div 
                    key={index} 
                    width={500}
                    height={300}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      <Image 
                       key={index}
                        src={image.path}
                        width={500}
                        height={300}
                        alt=''
                        className='object-cover object-bottom height-slides rounded-md'
                      />
                      {/* bg */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#df0707] to-[#1d0a57] opacity-0 group-hover:opacity-80 transition-all duration-700">
                      <a 
                        className='absolute w-[100%] h-[100%]' 
                        href={image.ancre} 
                      >
                      </a>
                      </div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full xl:group-hover:-translate-y-24 group-hover:-translate-y-14 group-hover:-translate-x-0 transition-all duration-300">
                          <a 
                            className='absolute w-[100%] h-[100%]' 
                            href={image.ancre} 
                          >
                          </a>
                        <div className="flex items-center gap-x-2 md:text-[13px] text-[9px] tracking-[0.2em]">
                          <div className="delay-100">VOIR</div>
                          <div className="translate-y-[800%] group-hover:translate-y-0 transition-all duration-200 delay-100">
                            PROJET
                          </div>
                          <div className="text-xl translate-y-[1000%] group-hover:translate-y-0 transition-all duration-200 delay-200"><BsArrowRight /></div>
                          <br />
                        </div>
                        <div className="titre md:text-[18px] text-[14px]">
                          {image.title}
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
