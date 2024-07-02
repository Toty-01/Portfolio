// testimonial data
const testimonialData = [
  {
    image: '/unnamed.jpg',
    name: 'Brice Cauche',
    position: 'Client',
    message:
      'Très professionnel, il a su fournir des solutions à chacunes de nos demandes pour mettre en avant notre marque sur le web. Je recommande ses services.',
  },
  {
    image: '/johnny.jpg',
    name: 'Johnny Ryser',
    position: 'Client',
    message:
      "Un travail minutieux. Du beau boulot. A su mettre l'image de notre Club en avant sur le web !! (fcpriay.fr)",
  },
  {
    image: '/Alexis.jpg',
    name: 'Alexis',
    position: 'Utilisateur',
    message:
      "Interface simple d'utilisation. Site design et responsive. On a envie de naviguer d'avantage. (talis.community)",
  },
];

import { FaQuoteLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image';
import { Navigation, Pagination} from 'swiper';

const TestimonialSlider = () => {
  return (<Swiper
    navigation={true}
    pagination={{
      clickable: true,
    }}
    modules={[ Navigation, Pagination]}
    className="h-[360px]"
  >
    {
      testimonialData.map((person,index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              {/* avatar name position */}
              <div className="w-full max-w-[300px] flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col text-center">
                  {/* avatar */}
                  <div className="mb-2 mx-auto">
                    <Image 
                      width={100} 
                      height={100} 
                      alt='icone photo client' 
                      src={person.image}
                      className='rounded-full youuu'
                    />
                  </div>
                  {/* Name */}
                  <div className="text-lg">
                    {person.name}
                  </div>
                  {/* Position */}
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {person.position}
                  </div>
                </div>
              </div>
              {/* message */}
              <div className="flex flex-col mt-6 xl:mt-0 justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                <div className="mb-4">
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0'/>
                </div>
                <div className="xl:text-lg text-center md:text-left">
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })
    }
  </Swiper>
  )
};

export default TestimonialSlider;
