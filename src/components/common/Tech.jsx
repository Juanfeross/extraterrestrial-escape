import { useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export function Tech({ techs, side=""}) {
  const [tech, setTech] = useState(techs[0]);

  const changeTech = (techSelected) => {
    setTech(techSelected);
  };

  return (
    <div>
      <div className={`flex justify-start flex-col sm:justify-start sm:flex-col lg:justify-end lg:flex-row${side} gap-2`}>
        <img className="h-[400px] p-2" src={tech.image} alt={tech.name} />
        <div className="p-10 h-[400px]">
          <h2 className="font-semibold text-4xl mb-5"> {tech.name} </h2>
          <p className="text-justify text-gray-400 lg:text-3xl lg:pr-5">
            {tech.description}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6 mt-2 h-[500px]">
        <div className="overflow-x-hidden mt-6 py-0 px-8">
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".pagination",
              clickable: true,
            }}
            slidesPerView={4}
            spaceBetween={20}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.50": {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              "@0.75": {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              "@1.00": {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              "@1.50": {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              "@1.75": {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }}
          >
            {techs.map((tec) => (
              <SwiperSlide key={tec.name}>
                {}
                <div className="flex justify-center items-center">
                  <div onClick={() => changeTech(tec)} className="w-[250px] h-[200px] bg-gray-900 border-gray-800 rounded-md flex flex-col justify-center items-center p-4 cursor-pointer hover:w-[300px] hover:h-[230px]">
                    <img className="w-[100px]" src={tec.image} />
                    <p className="text-blue-500 text-xl font-semibold px-4 py-2 rounded-lg">
                      {tec.name}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="pagination" />
      </div>
    </div>
  );
}
