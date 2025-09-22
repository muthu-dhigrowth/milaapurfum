// import Image from "next/image";
import {Millaparfumimag1} from "../../assets/images";
import {Millaparfumimag2} from "../../assets/images";
import {Millaparfumimag3} from "../../assets/images";
import {Millaparfumimag4} from "../../assets/images";
import {Millaparfumimag5} from "../../assets/images";
import {Millaparfumimag6} from "../../assets/images";

const instagramImages = [
  Millaparfumimag1,
  Millaparfumimag2,
  Millaparfumimag3,
  Millaparfumimag4,
  Millaparfumimag5,
  Millaparfumimag6,
];
const duplicatedImages = [...instagramImages, ...instagramImages];

const InstagramGallery = () => {
  return (
    <>
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 60s linear infinite;
          }
        `}
      </style>
      <section className="relative overflow-hidden bg-gradient-to-b from-[#fec2ce] to-[#ff9f90] py-[120px]">
        <div className="flex animate-marquee will-change-transform">
          {duplicatedImages.map((src, index) => (
            <a
              key={`${src}-${index}`}
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block flex-shrink-0 mx-3 group"
            >
              <div className="relative w-[220px] h-[280px] sm:w-[260px] sm:h-[320px] md:w-[300px] md:h-[360px] overflow-hidden rounded-[12px] shadow-lg">
                <img
                  src={src}
                  alt={`Soapnic Instagram photo ${index + 1}`}
                  fill
                  sizes="(min-width: 768px) 360px, 100vw"
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
            </a>
          ))}
        </div>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-15 py-6 rounded-[12px] bg-white text-center text-primary font-display no-underline z-10 transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <strong className="block text-2xl font-normal leading-tight font-Bitter">Follow us</strong>
          <strong className="block text-xl font-normal leading-tight font-Lato">#MilaaParfum</strong>
        </a>
      </section>
    </>
  );
};

export default InstagramGallery;