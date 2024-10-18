import React from "react";
import "./test.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { logoj, logos } from "../../images";

const data = [
  {
    avatar: logos,
    name: "saurashtra University",
    review: `Bachelor of computer application
    Year of passing - 2024`,
  },

  {
    avatar: logoj,
    name: "Jain Deemed To Be University",
    review: `Masters of computer application  
    Year of passing - Running
    `,
  },
];

function Education() {
  return (
    <section id="education">
      <div className="section__wrapper">
        <div className="section__header">
          <h2 className="primary__title">Education</h2>
        </div>
        <Swiper
          className="education__container"
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            700: {
              slidesPerView: 2,
            },
          }}
        >
          {data.map(({ avatar, name, review }, index) => (
            <SwiperSlide className="education" key={index}>
              <div className="client__avatar">
                <img src={avatar} alt={review} />
              </div>
              <h3 className="client__name">{name}</h3>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Education;
