// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";


// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Marque',
    description: "Comptez sur moi pour mettre en avant votre marque sur le web.",
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: "Mon expertise en design créatif, fonctionnel et innovant, saura attirer et inspirer vos utilisateurs.",
  },
  {
    icon: <RxDesktop />,
    title: 'Développement',
    description: "Optimisez vos projets avec mes connaissances en développement à l'aide de solutions efficaces et innovantes.",
  },
  {
    icon: <RxReader />,
    title: 'Rédaction',
    description: 'Boostez votre communication avec une rédaction optimisée.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Améliorez votre visibilité en ligne avec mon expertise en SEO, optimisant votre site pour génerer du trafic',
  },
];
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import {FreeMode, Pagination} from 'swiper';

const ServiceSlider = () => {
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
    modules={[FreeMode, Pagination]}
    className="h-[240px] sm:h-[340px]"
  >
    {
      serviceData.map((item,index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              {/*icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/*titre et desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">{item.description}</p>
              </div>
              {/*arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"/>
              </div>
            </div>
          </SwiperSlide>
        );
      })
    }
  </Swiper>;
};

export default ServiceSlider;
