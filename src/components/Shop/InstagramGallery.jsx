import React, { useEffect, useRef, useState } from 'react';
import {Millaparfumimag1,Millaparfumimag2,Millaparfumimag3,Millaparfumimag4,Millaparfumimag5,Millaparfumimag6,} from "../../assets/images";
// import Image from 'next/image';

const allImages = [
  Millaparfumimag1,
  Millaparfumimag2,
  Millaparfumimag3,
  Millaparfumimag4,
  Millaparfumimag5,
  Millaparfumimag6,
];

const imagesRow = allImages; // Single row

const socialIconUrl = "https://cdn.prod.website-files.com/65642838c9018bf978a0ef82/656d75233a1fc8aff4fbe320_icon-28.svg";

const InstagramPost = ({ src, index }) => (
  <a
    href="https://www.instagram.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`View Instagram post ${index + 1}`}
    className="group relative block w-[220px] h-[220px] flex-shrink-0 mx-3"
  >
    <img
      src={src}
      alt={`Instagram post ${index + 1}`}
      width={220}
      height={220}
      className="object-cover w-full h-full rounded-xl transition-transform duration-300 group-hover:scale-105"
    />
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl">
      <img
        src={socialIconUrl}
        alt="Instagram Icon"
        width={40}
        height={40}
      />
    </div>
  </a>
);

const InstagramGallery = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let rafId;
    const tick = () => {
      const el = scrollRef.current;
      if (el && !isPaused) {
        el.scrollLeft += 1; // increased scroll speed
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
          el.scrollLeft = 0; // loop
        }
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isPaused]);

  return (
    <section className="py-20 bg-gradient-to-b from-[#FFB39A] to-[#ff8a63]">
      <div
        className="relative w-full overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none]"
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex flex-nowrap items-center py-2 snap-x snap-mandatory pl-4">
          {imagesRow.map((src, index) => (
            <div key={`row-${index}`} className="snap-start">
              <InstagramPost src={src} index={index} />
            </div>
          ))}
          {/* Duplicate images for seamless loop */}
          {imagesRow.map((src, index) => (
            <div key={`row-duplicate-${index}`} className="snap-start">
              <InstagramPost src={src} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;