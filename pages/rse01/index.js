import React from 'react'
import Circles from '../../components/Circles';
import Image from 'next/image';

const prodatasss = {
  datasss: 
    {
      url: {
        ref: 'https://www.rse01.com',
      },
      text: {
        title: 'Rse01',
        subtitle: "Régie Services Energie - Ambérieux en Dombes",
        year: '2023',
      },
      image: {
        sources: ['/rse01.png', '/thumb1.jpg', '/thumb2.jpg'],
        classes: [
          'w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full',
          ' w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32',
          ' w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32'
        ],
      }
    }
};


const rse = () => {
  return (
    <div className="h-full bg-primary/20 relative xl:top-34 top-44 pt-10 lolo xl:pb-4 pb-40">
      <h2 className='xl:text-4xl text-2xl text-center font-bold pb-10'>{prodatasss.datasss.text.title} <span className='text-accent'>.</span></h2>
      
      <div class="py-6 px-4 sm:p-6 md:py-10 md:px-8">
        <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2 mb-40 xl-mb-0">
          <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
            <h2 class="mt-1 text-lg font-semibold text-white md:text-2xl dark:sm:text-white lg:mb-2 order-2">{prodatasss.datasss.text.subtitle}</h2>
            <p class="text-sm leading-4 font-medium text-white lg:order-first order-1 mt-4 lg:mt-2">Technologies</p>
          </div>
          <div class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
            {prodatasss.datasss.image.sources.map((source, index) => (
              <Image key={index} width={600} height={400} src={source} alt={`image-${index}`} className={prodatasss.datasss.image.classes[index]} loading="lazy" />
            ))}
          </div>
          <dl class="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
            <dt class="sr-only">Reviews</dt>
            <dd class="text-indigo-600 flex items-center dark:text-indigo-400">
              <svg width="24" height="24" fill="none" aria-hidden="true" class="mr-1 stroke-current dark:stroke-indigo-500">
                <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </dd>
            <dt class="sr-only">Location</dt>
            <dd class="flex items-center">
              <svg width="2" height="2" aria-hidden="true" fill="currentColor" class="mx-3 text-slate-300">
                <circle cx="1" cy="1" r="1" />
              </svg>
              <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
                <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
              </svg>
              Collingwood, Ontario
            </dd>
          </dl>
          <p class="mt-2 text-sm leading-6 col-start-1 sm:col-span-2 lg:row-start-3 lg:mt-2 lg:col-span-1 dark:text-slate-400">
            This sunny and spacious room is for those traveling light and looking for a comfy and cosy place to lay their head for a night or two. This beach house sits in a vibrant neighborhood littered with cafes, pubs, restaurants and supermarkets and is close to all the major attractions such as Edinburgh Castle and Arthurs Seat.
          </p>
          <div class="mt-4 col-start-1 row-start-4 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-5 lg:row-end-6">
            <a href={prodatasss.datasss.url.ref} className='w-full h-full' target='_blank'><button type="button" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">Voir le site</button></a>
            <a href={"/contact"}><button type="button" class="bg-indigo-600 ml-3 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"> Me contacter</button></a>
          </div>
        </div>
      </div>

      <Circles />
    </div>
  )
}

export default rse